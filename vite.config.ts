/** @type {import('vite').UserConfig} */
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "next/image": path.resolve(__dirname, "./.ladle/UnoptimizedImage.tsx"),
      "next/link": path.resolve(__dirname, "./.ladle/UnoptimizedLink.tsx"),
    },
  },
  plugins: [svgr()],
  define: {
    "process.env": process.env,
    global: {},
  },
  optimizeDeps: {
    exclude: ['@patternfly-labs/react-form-wizard']
  }
});
