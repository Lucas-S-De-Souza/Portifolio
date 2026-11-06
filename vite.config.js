import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // No GitHub Pages o site fica em /Portifolio/. Localmente continua em "/".
  base: process.env.GITHUB_ACTIONS ? "/Portifolio/" : "/",
});