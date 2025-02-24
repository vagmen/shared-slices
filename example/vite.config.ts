import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    hmr: {
      overlay: true,
    },
    fs: {
      allow: [".."],
    },
  },
  resolve: {
    alias: {
      "@urman/shared-slices": resolve(__dirname, "../src"),
    },
  },
});
