/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1B1B1B", //background color
        "secondary-color": "#EEF8CF",
        "accent-color": "#D1FF48",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      devil: ["Devil Breeze", "Anniversary", "sans-serif"],
    },
  },
  plugins: [],
};
