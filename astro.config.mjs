import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

const localBuildConfig = process.env.CI
  ? {}
  : {
      site: "http://localhost:4321",
      base: "/forest-catalog",
    };

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  ...localBuildConfig,
});
