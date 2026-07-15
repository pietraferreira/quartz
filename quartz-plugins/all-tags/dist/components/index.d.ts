import { QuartzComponent } from '@quartz-community/types';

interface AllTagsOptions {
    title?: string;
    minFontRem: number;
    maxFontRem: number;
}
declare const _default: (userOpts?: Partial<AllTagsOptions>) => QuartzComponent;

export { _default as AllTags };
