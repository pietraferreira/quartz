// ---------------------------------------------------------------------------
// Komorebi (木漏れ日) — animated pixelated "dappled sunlight" canvas.
//
// The idea: sum a handful of slowly drifting sine waves to get a smooth field
// of brightness values, sharpen it into distinct patches of light and shadow,
// then colour those patches and draw them as chunky pixels. Because the whole
// thing is just math over (x, y, time) it's cheap and loops forever.
//
// Everything is driven by the site's theme colours (CSS variables), so it
// adapts to light/dark mode and to the colour-scheme picker automatically.
// ---------------------------------------------------------------------------

const CELL = 7 // logical size of one "pixel" in px — larger = chunkier
const FPS = 30 // frames per second (retro cadence, and kinder on the CPU)
const WARM = "#ffe6a8" // the warm sunlight highlight colour

type RGB = [number, number, number]

// Parse "#rgb" / "#rrggbb" into [r,g,b]. Falls back to mid-grey.
function parseColor(input: string): RGB {
  const s = input.trim()
  const hex = s.startsWith("#") ? s.slice(1) : s
  if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16)
    const g = parseInt(hex[1] + hex[1], 16)
    const b = parseInt(hex[2] + hex[2], 16)
    return [r, g, b]
  }
  if (hex.length >= 6) {
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    if (!Number.isNaN(r) && !Number.isNaN(g) && !Number.isNaN(b)) return [r, g, b]
  }
  return [128, 128, 128]
}

function mix(a: RGB, b: RGB, t: number): RGB {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ]
}

function cssVar(el: Element, name: string): string {
  return getComputedStyle(el).getPropertyValue(name)
}

function startScene(container: HTMLElement): () => void {
  const canvas = document.createElement("canvas")
  container.appendChild(canvas)
  const ctx = canvas.getContext("2d")!

  // Palette derived from the current theme.
  let shadow: RGB, accent: RGB, glow: RGB
  function readPalette() {
    const root = document.documentElement
    const bg = parseColor(cssVar(root, "--light") || "#faf8f8")
    const tertiary = parseColor(cssVar(root, "--tertiary") || "#84a59d")
    const secondary = parseColor(cssVar(root, "--secondary") || "#284b63")
    shadow = mix(bg, secondary, 0.5) // shaded ground
    accent = tertiary // dappled mid tone
    glow = mix(parseColor(WARM), bg, 0.15) // bright light gap
  }
  readPalette()

  let cols = 0
  let rows = 0
  function resize() {
    const rect = container.getBoundingClientRect()
    const dpr = 1 // draw at low res on purpose (pixelated)
    cols = Math.max(1, Math.ceil(rect.width / CELL))
    rows = Math.max(1, Math.ceil(rect.height / CELL))
    canvas.width = cols * dpr
    canvas.height = rows * dpr
    canvas.style.width = rect.width + "px"
    canvas.style.height = rect.height + "px"
  }
  resize()

  // Smooth brightness field: layered sines + a radial ripple. Returns -1..1.
  function field(x: number, y: number, t: number): number {
    const cx = cols / 2
    const cy = rows / 2
    let v = 0
    v += Math.sin(x * 0.35 + t * 0.7)
    v += Math.sin(y * 0.45 - t * 0.5)
    v += Math.sin((x + y) * 0.25 + t * 0.9)
    v += Math.sin(Math.hypot(x - cx, y - cy) * 0.3 - t * 1.1)
    return v / 4
  }

  function colorFor(l: number): RGB {
    // l in 0..1: shadow -> accent -> warm glow
    if (l < 0.55) return mix(shadow, accent, l / 0.55)
    return mix(accent, glow, (l - 0.55) / 0.45)
  }

  let raf = 0
  let last = 0
  const interval = 1000 / FPS
  const start = performance.now()

  function frame(now: number) {
    raf = requestAnimationFrame(frame)
    if (now - last < interval) return
    last = now
    const t = (now - start) / 1000
    for (let gy = 0; gy < rows; gy++) {
      for (let gx = 0; gx < cols; gx++) {
        const raw = field(gx, gy, t) // -1..1
        // sharpen into light gaps with a power curve
        const l = Math.pow(Math.max(0, Math.min(1, (raw + 1) / 2)), 2.4)
        const [r, g, b] = colorFor(l)
        ctx.fillStyle = `rgb(${r},${g},${b})`
        ctx.fillRect(gx, gy, 1, 1)
      }
    }
  }
  raf = requestAnimationFrame(frame)

  const ro = new ResizeObserver(() => resize())
  ro.observe(container)

  const onTheme = () => readPalette()
  document.addEventListener("themechange", onTheme)

  // cleanup
  return () => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    document.removeEventListener("themechange", onTheme)
    canvas.remove()
  }
}

function setup() {
  const container = document.querySelector<HTMLElement>(".komorebi")
  if (!container || container.dataset.komorebiReady === "true") return
  container.dataset.komorebiReady = "true"
  const stop = startScene(container)
  window.addCleanup(() => {
    delete container.dataset.komorebiReady
    stop()
  })
}

document.addEventListener("nav", setup)
