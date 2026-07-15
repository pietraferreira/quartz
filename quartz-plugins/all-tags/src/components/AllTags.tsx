import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
  QuartzPluginData,
} from "@quartz-community/types";
import { resolveRelative } from "../util/path";

type TagPluginData = QuartzPluginData & Record<string, unknown>;

export interface AllTagsOptions {
  title?: string;
  minFontRem: number;
  maxFontRem: number;
}

const defaultOptions: AllTagsOptions = {
  title: "Tags",
  minFontRem: 0.75,
  maxFontRem: 1.5,
};

interface TagEntry {
  tag: string;
  count: number;
}

function collectTagCounts(allFiles: TagPluginData[]): TagEntry[] {
  const counts = new Map<string, number>();
  for (const file of allFiles) {
    if ((file as { unlisted?: unknown }).unlisted === true) continue;
    const fileTags = (file.frontmatter?.tags ?? []) as string[];
    for (const tag of fileTags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

function fontSizeRem(count: number, min: number, max: number, opts: AllTagsOptions): number {
  if (max === min) return (opts.minFontRem + opts.maxFontRem) / 2;
  const t = (count - min) / (max - min);
  return opts.minFontRem + t * (opts.maxFontRem - opts.minFontRem);
}

export default ((userOpts?: Partial<AllTagsOptions>) => {
  const AllTags: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
  }: QuartzComponentProps & { displayClass?: string }) => {
    const opts = { ...defaultOptions, ...userOpts };
    const entries = collectTagCounts(allFiles as TagPluginData[]);
    if (entries.length === 0) return null;

    const counts = entries.map((e) => e.count);
    const min = Math.min(...counts);
    const max = Math.max(...counts);
    const slug = fileData.slug as string | undefined;

    return (
      <div class={[displayClass, "all-tags"].filter(Boolean).join(" ")}>
        <h3>{opts.title}</h3>
        <ul class="all-tags-list">
          {entries.map(({ tag, count }) => (
            <li>
              <a
                class="internal tag-link"
                href={resolveRelative(slug!, `tags/${tag}`)}
                style={`font-size: ${fontSizeRem(count, min, max, opts).toFixed(2)}rem`}
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  AllTags.css = `
.all-tags {
  margin-top: 1rem;

  & > h3 {
    margin: 0.5rem 0 0 0;
    font-size: 1rem;
  }
}

.all-tags-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.3rem 0.5rem;
  padding-left: 0;
  margin: 0.75rem 0 0 0;
}

.all-tags-list > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
}
`;

  return AllTags;
}) satisfies QuartzComponentConstructor;
