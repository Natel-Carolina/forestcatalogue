import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const site = process.env.GITHUB_REPOSITORY_OWNER
  ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
  : '';
const base = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';
// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [tailwind()],
});
