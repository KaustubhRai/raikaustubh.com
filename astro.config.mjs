import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import partytown from '@astrojs/partytown'

import MDXCodeBlocks, { mdxCodeBlockAutoImport } from 'astro-mdx-code-blocks';

export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        // Update the path if necessary to match the actual location
        mdxCodeBlockAutoImport('./src/components/CodeBlock.astro'),
      ],
    }),
    MDXCodeBlocks(),
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
