// ---------------------------------------------------------------------------
// Colour-scheme picker (runs in the browser)
//
// Quartz renders its theme colours as CSS custom properties:
//   :root                        { --light: ...; --secondary: ...; ... }   (light mode)
//   :root[saved-theme="dark"]    { --light: ...; --secondary: ...; ... }   (dark mode)
//
// To switch palettes at runtime we just append a <style> element to <head>
// that re-declares those same variables. Because it comes later in the document
// than Quartz's generated stylesheet (and has equal specificity), it wins.
//
// To add your own palette, copy one of the entries in PRESETS below and change
// the colours. Each preset defines a full light + dark variable set.
// ---------------------------------------------------------------------------

type Vars = {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  highlight: string
  textHighlight: string
}

interface Preset {
  name: string
  light: Vars
  dark: Vars
}

const PRESETS: Preset[] = [
  {
    name: "Morioh",
    light: {
      light: "#faf8f8",
      lightgray: "#e5e5e5",
      gray: "#b8b8b8",
      darkgray: "#4e4e4e",
      dark: "#2b2b2b",
      secondary: "#284b63",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#fff23688",
    },
    dark: {
      light: "#1a1b26",
      lightgray: "#292633",
      gray: "#646464",
      darkgray: "#c0caf5",
      dark: "#c0caf5",
      secondary: "#bb9af7",
      tertiary: "#2ac3de",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#b3aa0288",
    },
  },
  {
    name: "Rosé",
    light: {
      light: "#fffaf3",
      lightgray: "#f2e9e1",
      gray: "#9893a5",
      darkgray: "#575279",
      dark: "#575279",
      secondary: "#d7827e",
      tertiary: "#b4637a",
      highlight: "rgba(215, 130, 126, 0.15)",
      textHighlight: "#f6c17788",
    },
    dark: {
      light: "#191724",
      lightgray: "#26233a",
      gray: "#6e6a86",
      darkgray: "#e0def4",
      dark: "#e0def4",
      secondary: "#ebbcba",
      tertiary: "#eb6f92",
      highlight: "rgba(235, 188, 186, 0.15)",
      textHighlight: "#f6c17766",
    },
  },
  {
    name: "Forest",
    light: {
      light: "#f4f6f2",
      lightgray: "#dde5d8",
      gray: "#9caf92",
      darkgray: "#3a4a34",
      dark: "#26331f",
      secondary: "#4f772d",
      tertiary: "#90a955",
      highlight: "rgba(79, 119, 45, 0.13)",
      textHighlight: "#c9e26588",
    },
    dark: {
      light: "#12180f",
      lightgray: "#1e2a18",
      gray: "#5c6b52",
      darkgray: "#d8e6cf",
      dark: "#e6efdd",
      secondary: "#90a955",
      tertiary: "#c9e265",
      highlight: "rgba(144, 169, 85, 0.15)",
      textHighlight: "#90a95566",
    },
  },
  {
    name: "Nord",
    light: {
      light: "#eceff4",
      lightgray: "#d8dee9",
      gray: "#9aa5b5",
      darkgray: "#3b4252",
      dark: "#2e3440",
      secondary: "#5e81ac",
      tertiary: "#88c0d0",
      highlight: "rgba(94, 129, 172, 0.13)",
      textHighlight: "#ebcb8b88",
    },
    dark: {
      light: "#2e3440",
      lightgray: "#3b4252",
      gray: "#616e88",
      darkgray: "#d8dee9",
      dark: "#eceff4",
      secondary: "#88c0d0",
      tertiary: "#8fbcbb",
      highlight: "rgba(136, 192, 208, 0.15)",
      textHighlight: "#ebcb8b55",
    },
  },
  {
    name: "Gruvbox",
    light: {
      light: "#fbf1c7",
      lightgray: "#ebdbb2",
      gray: "#a89984",
      darkgray: "#3c3836",
      dark: "#282828",
      secondary: "#af3a03",
      tertiary: "#427b58",
      highlight: "rgba(175, 58, 3, 0.12)",
      textHighlight: "#d7992188",
    },
    dark: {
      light: "#282828",
      lightgray: "#3c3836",
      gray: "#665c54",
      darkgray: "#ebdbb2",
      dark: "#fbf1c7",
      secondary: "#fabd2f",
      tertiary: "#8ec07c",
      highlight: "rgba(250, 189, 47, 0.14)",
      textHighlight: "#d7992166",
    },
  },
]

const STORAGE_KEY = "colorscheme"
const STYLE_ID = "colorscheme-override"

function declarations(v: Vars): string {
  return (Object.keys(v) as (keyof Vars)[]).map((k) => `--${k}:${v[k]};`).join("")
}

function cssFor(preset: Preset): string {
  return `:root{${declarations(preset.light)}}\n:root[saved-theme="dark"]{${declarations(preset.dark)}}`
}

function applyPreset(name: string): void {
  const preset = PRESETS.find((p) => p.name === name) ?? PRESETS[0]
  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null
  if (!style) {
    style = document.createElement("style")
    style.id = STYLE_ID
    document.head.appendChild(style)
  }
  style.textContent = cssFor(preset)
  localStorage.setItem(STORAGE_KEY, preset.name)
}

// Apply immediately (this script is a `beforeDOMLoaded` script, so it runs
// before first paint — this avoids a flash of the default palette).
const saved = localStorage.getItem(STORAGE_KEY) ?? PRESETS[0].name
applyPreset(saved)

// Re-apply and (re)wire the <select> on every SPA navigation.
function setup(): void {
  const current = localStorage.getItem(STORAGE_KEY) ?? PRESETS[0].name
  applyPreset(current)

  const selects = document.querySelectorAll<HTMLSelectElement>("select.colorscheme-picker")
  selects.forEach((sel) => {
    if (sel.options.length === 0) {
      for (const p of PRESETS) {
        const opt = document.createElement("option")
        opt.value = p.name
        opt.textContent = p.name
        sel.appendChild(opt)
      }
    }
    sel.value = current
    const onChange = () => applyPreset(sel.value)
    sel.addEventListener("change", onChange)
    window.addCleanup(() => sel.removeEventListener("change", onChange))
  })
}

document.addEventListener("nav", setup)
