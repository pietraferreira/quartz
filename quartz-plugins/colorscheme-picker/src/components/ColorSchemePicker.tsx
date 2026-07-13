import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
// The `.inline.ts` import is compiled to a browser-ready JS string at build time
// and shipped as a `beforeDOMLoaded` script. See tsup.config.ts (inlineScriptPlugin).
// @ts-expect-error - inline script import handled by the tsup bundler
import script from "./scripts/colorscheme.inline.ts"
// The `.scss` import is compiled to a plain CSS string and attached as `.css`.
import styles from "./styles/colorscheme.scss"

// A tiny toolbar control that lets a visitor pick between preset colour palettes.
// All of the palette data + logic lives in the inline script (it runs in the
// browser); this component just renders the empty <select>, which the script
// fills with options and wires up. Rendering an empty select keeps a single
// source of truth for the presets (the script).
const ColorSchemePicker: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <select
      class={["colorscheme-picker", displayClass].filter(Boolean).join(" ")}
      aria-label="Color scheme"
      title="Color scheme"
    />
  )
}

ColorSchemePicker.beforeDOMLoaded = script
ColorSchemePicker.css = styles

export default (() => ColorSchemePicker) satisfies QuartzComponentConstructor
