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
        "3xl": "0 12px 12px rgba(0, 0, 0, 1.5)",
      },
    },
  },
  plugins: [],
};
