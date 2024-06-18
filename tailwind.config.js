/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  safelist: ["bg-lime-200", "bg-amber-200"], // TODO Temp fix for JIT mode
  theme: {
    extend: {},
  },
  plugins: [],
};
