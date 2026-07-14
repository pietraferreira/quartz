# recent-notes-collapse

A local Quartz v5 component plugin that makes the **Recent Notes** sidebar
section collapsible. Click (or focus + Enter) the "Recent Notes" heading to fold
or unfold the list; the choice is remembered in `localStorage`.

It renders nothing itself — it just ships a small script + CSS that enhance the
list produced by the `recent-notes` plugin.

## Files
- `src/components/scripts/recent-notes-collapse.inline.ts` — the toggle logic.
- `src/components/styles/recent-notes-collapse.scss` — the chevron + hidden state.

## Rebuild after editing
```sh
cd quartz-plugins/recent-notes-collapse
npm install   # first time only
npm run build
```
