const pluginSortImports = require("@ianvs/prettier-plugin-sort-imports")
const pluginTailwindcss = require("prettier-plugin-tailwindcss")

/** @type {import("prettier").Parser}  */
const myParser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse,
}

/** @type {import("prettier").Plugin}  */
const myPlugin = {
  parsers: {
    typescript: myParser,
  },
}

module.exports = {
  htmlWhitespaceSensitivity: "ignore",
  printWidth: 100,
  singleQuote: false,
  semi: false,
  useTabs: false,
  proseWrap: "always",
  arrowParens: "avoid",
  bracketSpacing: true,
  trailingComma: "es5",
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "",
    ".s?css$",
    "^@heroicons",
    "^@/assets",
    "",
    "^[./]",
    "^@/",
    "",
    "<THIRD_PARTY_TYPES>",
    "<TYPE>",
  ],
  importOrderSeparation: false,
  importOrderMergeDuplicateImports: true,
  plugins: [myPlugin],
}
