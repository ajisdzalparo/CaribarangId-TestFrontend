import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: ["#0E4E9B"],
        secondary: ["#E64123"],
      },
    },
  },
  plugins: [tailwindScrollbar, require("@tailwindcss/line-clamp")],
};
