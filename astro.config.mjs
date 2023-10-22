import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com' // TODO: update with deployment URL
  ,
  integrations: [tailwind()]
});