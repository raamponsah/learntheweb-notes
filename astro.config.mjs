import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config


// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://raamponsah.github.io',
  base: '/learntheweb-notes',
});