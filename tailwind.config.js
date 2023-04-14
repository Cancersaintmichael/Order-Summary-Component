/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "376px",
        ...defaultTheme.screens,
      },
      colors: {
        "pale-blue": "#f5f7ff",
        "bright-blue": "#3829e0",
        "very-pale-blue": "#f5f7ff",
        "desaturated-blue": "#7280a7",
        "dark-blue": "#1f2f56",
        pattern: "#e2e8ff",
      },
      backgroundImage: {
        "pattern-desktop": "url('/src/assets/pattern-background-desktop.svg')",
        "pattern-mobile": "url('/src/assets/pattern-background-mobile.svg')",
      },
    },
  },
  plugins: [],
};
