/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      text: {
        50: "hsl(var(--text-50))",
        100: "hsl(var(--text-100))",
        200: "hsl(var(--text-200))",
        300: "hsl(var(--text-300))",
        400: "hsl(var(--text-400))",
        500: "hsl(var(--text-500))",
        600: "hsl(var(--text-600))",
        700: "hsl(var(--text-700))",
        DEFAULT: "hsl(var(--text-800))",
        900: "hsl(var(--text-900))",
        950: "hsl(var(--text-950))",
      },
      background: {
        DEFAULT: "hsl(var(--background-0))",
        50: "hsl(var(--background-50))",
        100: "hsl(var(--background-100))",
        200: "hsl(var(--background-200))",
        300: "hsl(var(--background-300))",
        400: "hsl(var(--background-400))",
        500: "hsl(var(--background-500))",
        600: "hsl(var(--background-600))",
        700: "hsl(var(--background-700))",
        800: "hsl(var(--background-800))",
        900: "hsl(var(--background-900))",
        950: "hsl(var(--background-950))",
      },
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      accent: "hsl(var(--accent))",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [],
};
