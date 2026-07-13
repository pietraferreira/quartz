# colorscheme-picker

A local Quartz v5 component plugin that adds a small dropdown to the toolbar for
switching between colour-palette presets at runtime. The chosen palette is saved
to `localStorage` and re-applied on every page.

## How it works

Quartz renders its theme colours as CSS custom properties on `:root` (light) and
`:root[saved-theme="dark"]` (dark). The picker appends a `<style>` element to
`<head>` that re-declares those variables for the chosen preset — since it comes
later in the document, it overrides the defaults.

- `src/components/ColorSchemePicker.tsx` — renders the empty `<select>`.
- `src/components/scripts/colorscheme.inline.ts` — the palettes + browser logic.
- `src/components/styles/colorscheme.scss` — styling for the control.

## Add your own palette

Open `src/components/scripts/colorscheme.inline.ts`, copy an entry in `PRESETS`,
change the colours, then rebuild:

```sh
cd quartz-plugins/colorscheme-picker
npm install   # first time only
npm run build
```

The committed `dist/` is what Quartz actually loads, so you must rebuild after
editing `src/`.
