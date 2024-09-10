import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import aws from "astro-sst";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://jamesmcewan.com/",
  output: "static",
  adapter: aws(),
});
