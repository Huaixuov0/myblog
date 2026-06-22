import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://your-blog.vercel.app",
  build: {
    inlineStylesheets: "auto",
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
