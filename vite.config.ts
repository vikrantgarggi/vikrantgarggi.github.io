// vite.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/", // required for user GitHub Pages
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
