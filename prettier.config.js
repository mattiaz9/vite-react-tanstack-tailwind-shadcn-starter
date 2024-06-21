// @ts-check

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@ianvs/prettier-plugin-sort-imports').PluginConfig} */
export default {
  semi: false,
  arrowParens: "always",
  trailingComma: "all",
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "",
    ".s?css$",
    "^lucide-react",
    "^@icons-pack",
    "^@heroicons",
    "^@/assets",
    "",
    "^[./]",
    "^@/",
    "",
    "<TYPES>^[./]",
    "<TYPES>^react",
    "<TYPES>^@/",
    "<TYPES>",
  ],
  importOrderTypeScriptVersion: "5.0.0",
  tailwindConfig: "./tailwind.config.ts",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
}
