/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "#f5f7ff",
        "bright-blue": "#3829e0",
        "very-pale-blue": "#f5f7ff",
        "desaturated-blue": "#7280a7",
        "dark-blue": "#1f2f56",
      },
    },
  },
  plugins: [],
};
