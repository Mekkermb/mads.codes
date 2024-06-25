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
        classesPerLine: 1,
        group: "emptyLine",
      },
    ],
    "@stylistic/jsx-max-props-per-line": [
      "warn",
      {
        maximum: 1,
        when: "always",
      },
    ],
    "@stylistic/jsx-newline": [
      "warn",
      { prevent: true, allowMultilines: true },
    ],
  },
};
