module.exports = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "mixin",
          "for",
          "include",
          "function",
          "return",
          "if",
          "else",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
}
