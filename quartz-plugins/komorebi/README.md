# komorebi

A local Quartz v5 component plugin that draws an animated, pixelated
"dappled sunlight" (komorebi, 木漏れ日) canvas banner at the top of the home page.

Inspired by the effect on [jzhao.xyz](https://jzhao.xyz), rebuilt from scratch
so it's easy to read and tweak.

## How it works

The animation is pure math: a few slowly drifting sine waves are summed into a
smooth brightness field over `(x, y, time)`, sharpened into light/shadow patches,
coloured from the site's theme variables, and drawn as chunky pixels. Because it
reads the CSS colour variables, it follows dark mode and the colour-scheme picker.

- `src/components/Komorebi.tsx` — renders the frame (only on the home page).
- `src/components/scripts/komorebi.inline.ts` — the animation (well commented).
- `src/components/styles/komorebi.scss` — the frame styling.

## Tweak it

Open `src/components/scripts/komorebi.inline.ts`. Good things to play with:

- `CELL` — pixel chunkiness (bigger = blockier).
- `FPS` — animation speed / smoothness.
- `WARM` — the sunlight highlight colour.
- the `field()` function — the wave frequencies and drift directions.

Then rebuild (the committed `dist/` is what Quartz loads):

```sh
cd quartz-plugins/komorebi
npm install   # first time only
npm run build
```
