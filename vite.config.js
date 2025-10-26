import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Finity-Touch/",
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        marketplace: resolve(__dirname, "marketplace.html"),
      },
    },
  },
});
