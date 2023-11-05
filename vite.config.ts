import fs from "node:fs"
import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import unfonts from "unplugin-fonts/vite"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import eslintPlugin from "vite-plugin-eslint"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    https: mode === "development" &&
      fs.existsSync("ssl/key.pem") &&
      fs.existsSync("ssl/cert.pem") && {
        key: fs.readFileSync("ssl/key.pem"),
        cert: fs.readFileSync("ssl/cert.pem"),
      },
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [
    react(),
    svgr(),
    unfonts({
      custom: {
        families: [
          {
            name: "Geist",
            src: "./fonts/geist-sans/*.woff2",
          },
          {
            name: "Geist Mono",
            src: "./fonts/geist-mono/*.woff2",
          },
        ],
      },
    }),
    checker({
      typescript: true,
      overlay: false,
    }),
    eslintPlugin({ cache: false }),
  ],
}))
