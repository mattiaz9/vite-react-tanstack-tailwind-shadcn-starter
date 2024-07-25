// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "@typescript-eslint",
    "@tanstack/query",
    "react",
    "react-hooks",
    "react-refresh",
  ],
  extends: [
    "plugin:@typescript-eslint/strict",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignorePrimitives: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: { attributes: false },
      },
    ],
  },
  ignorePatterns: [
    "dist/",
    "node_modules/",
    ".eslintrc.cjs",
    "prettier.config.js",
    "postcss.config.js",
  ],
}
