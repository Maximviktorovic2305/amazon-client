/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");

const colors = {
   transparent: twColors.transparent,
   black: "#a6adbb",
   gray: "#7480ff",
   white: twColors.white,
   primary: "#7480ff",
   secondary: "#15191e",
   "bg-color": "#1d232a",
   aqua: "#268697",
   red: twColors.red[400],
};

module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      colors,
      extend: {
         keyframes: {
            animationOpacity: {
               from: { opacity: 0.2 },
               to: { opacity: 1 },
            },
            scaleIn: {
               "0%": {
                  opacity: 0,
                  transform: "scale(0.8)",
               },
               "50%": {
                  opacity: 0.3,
                  transform: "scale(0.9)",
               },
               "100%": {
                  opacity: 1,
                  transform: "scale(1)",
               },
            },
         },
         animation: {
            opacity: "animationOpacity .5s ease-in-out",
            scaleIn: "scaleIn .25s ease-in-out",
         },
      },
   },
   plugins: [],
};
