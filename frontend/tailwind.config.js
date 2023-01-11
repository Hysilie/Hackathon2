/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#FF9900",
        "second-yellow": "#ff8800",
      },
    },
  },
  plugins: [],
};
