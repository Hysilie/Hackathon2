/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#FF9900",
        "second-yellow": "#ff8800",
      },
      dropShadow: {
        "3xl": "0 8px 8px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
