import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      _components: "./src/components",
      _pages: "./src/pages",
      _assets: "./src/assets",
    },
  },
});
