import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
// @ts-expect-error - inline script import handled by the tsup bundler
import script from "./scripts/komorebi.inline.ts"
import styles from "./styles/komorebi.scss"

// "Komorebi" (木漏れ日) is the Japanese word for sunlight filtering through leaves.
// This renders an empty frame; the browser script draws + animates a pixelated
// dappled-light canvas inside it. We only show it on the home page (slug "index").
const Komorebi: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const slug = fileData.slug ?? ""
  if (slug !== "index") return null
  return <div class="komorebi" aria-hidden="true" />
}

Komorebi.afterDOMLoaded = script
Komorebi.css = styles

export default (() => Komorebi) satisfies QuartzComponentConstructor
