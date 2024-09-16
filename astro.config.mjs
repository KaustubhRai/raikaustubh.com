import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import sitemap from 'astro-sitemap';

import MDXCodeBlocks, { mdxCodeBlockAutoImport } from 'astro-mdx-code-blocks';

export default defineConfig({
  site: 'https://raikaustubh.com/',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Additional options if needed
    }),
    AutoImport({
      imports: [
        // Update the path if necessary to match the actual location
        mdxCodeBlockAutoImport('./src/components/CodeBlock.astro'),
      ],
    }),
    MDXCodeBlocks(),
    mdx(),
  ],
});
