import type {
  QuartzComponent,
  QuartzComponentConstructor,
} from "@quartz-community/types"
// @ts-expect-error - inline script import handled by the tsup bundler
import script from "./scripts/recent-notes-collapse.inline.ts"
import styles from "./styles/recent-notes-collapse.scss"

// This component renders nothing — it exists only to ship a bit of CSS + JS that
// turns the "Recent Notes" heading into a collapse toggle. The actual Recent
// Notes list is rendered by the separate `recent-notes` plugin; we just enhance it.
const RecentNotesCollapse: QuartzComponent = () => null

RecentNotesCollapse.afterDOMLoaded = script
RecentNotesCollapse.css = styles

export default (() => RecentNotesCollapse) satisfies QuartzComponentConstructor
