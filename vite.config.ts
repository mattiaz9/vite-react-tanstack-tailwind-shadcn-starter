import fs from "fs"
import stringHash from "string-hash"
import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"
import eslintPlugin from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    https: mode === "development" &&
      fs.existsSync("ssl/key.pem") &&
      fs.existsSync("ssl/cert.pem") &&
    {
      key: fs.readFileSync("ssl/key.pem"),
      cert: fs.readFileSync("ssl/cert.pem"),
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: (name, filename, css) => {
        if (name === "dark") return "dark"
        const hash = stringHash(css).toString(36).substr(0, 5)
        return `_${name}_${hash}`
      }
    }
  },
  plugins: [
    tsconfigPaths({ root: "." }),
    reactRefresh(),
    svgr(),
    eslintPlugin({ cache: false }),
  ]
}))
