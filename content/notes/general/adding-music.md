---
title: "Adding Music & Audio"
tags:
  - help
created: 2026-07-13
---
# Adding Music & Audio

You can drop audio players straight into any note — handy for sharing songs,
recordings, or voice notes. There are two ways to do it.

## 1. Obsidian embed (easiest)

Put the audio file somewhere under `content/` and embed it with the usual
Obsidian wikilink-embed syntax:

```
![[demo-tone.wav]]
```

Result:

![[demo-tone.wav]]

## 2. Raw HTML `<audio>` (most control)

If you want to point at a file by path (or a remote URL), use a plain
`<audio>` tag. This also lets you set attributes like `loop`:

```html
<audio controls src="notes/assets/demo-tone.wav"></audio>
```

Result:

<audio controls src="notes/assets/demo-tone.wav"></audio>

## Tips
- Supported formats: `.mp3`, `.wav`, `.ogg`, `.m4a`, `.flac`.
- Keep audio files under `content/` so they get published alongside the notes.
- For a whole playlist, just stack several players in one note.
