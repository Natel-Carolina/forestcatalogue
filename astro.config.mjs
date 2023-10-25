import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const localBuildConfig = process.env.CI
  ? {}
  : {
      site: "http://localhost:4321",
      base: "/forest-catalog",
    };
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  ...localBuildConfig,
});
