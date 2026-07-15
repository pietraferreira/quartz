# all-tags

A local Quartz v5 component plugin that lists every tag used across the site in
the left sidebar (underneath Recent Notes), each linking to its `tags/<tag>`
page — a flat, alphabetical tag index like a blog's category list.

- `src/components/AllTags.tsx` — collects tags from `allFiles` frontmatter,
  dedupes, sorts alphabetically, and renders them as links.

Rebuild after editing `src/`:

```sh
cd quartz-plugins/all-tags
npm install   # first time only
npm run build
```

The committed `dist/` is what Quartz actually loads.
