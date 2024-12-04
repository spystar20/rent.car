/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-bg": "#ffff",
        "light-text": "#0000",
        "light-first": "#f1f5f9",
        "light-second": "#f3f4f6",
        "dark-bg": "#0000",
        "dark-text": "#ffff",
        "dark-first": "#211D1D",
        "dark-second": "#fff3",
      },
    },
  },

  plugins: [],
};
