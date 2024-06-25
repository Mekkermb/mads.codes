module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:readable-tailwind/warning",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["readable-tailwind", "@stylistic"],
  rules: {
    "readable-tailwind/multiline": [
      "warn",
      {
        group: "never",
      },
    ],
    "@stylistic/jsx-newline": [
      "warn",
      { prevent: true, allowMultilines: true },
    ],
    "@stylistic/jsx-first-prop-new-line": ["warn", "never"],
    "@stylistic/jsx-indent-props": [2, 2],
  },
};
