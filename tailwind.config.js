/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "744px",
        phone: "320px",
        desktop: "1048px",
      },
      colors: {
        "primary-color": "#1B1B1B", //background color
        "secondary-color": "#EEF8CF", //text color
        "accent-color": "#D1FF48",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      devil: ["Devil Breeze", "Anniversary", "sans-serif"],
    },
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        roles: {
          words: ["Software Engineer", "Full Stack Developer", "Web Developer"],
          delay: 3,
          writeSpeed: 0.15,
        },
      },
    }),
  ],
};
