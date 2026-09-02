// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/content/site.ts';

const home = `${site.url}${site.base}`;

export default defineConfig({
  site: site.url,
  base: site.base,
  integrations: [
    // Without the filter the home page is listed twice, with and without a
    // trailing slash, which reads as duplicate content.
    sitemap({ filter: (page) => page !== home }),
  ],
  build: { inlineStylesheets: 'auto' },
});
