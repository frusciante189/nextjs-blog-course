module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDarkColor: "#1F2023",
        bgLightColor: "#F5F5F5",
        bgGray: "#27292D",
        darkBrand: "#51bbf6",
        lightBrand: "#D3242C",
        darkText: "#000C2D",
        darkGray: "#E5EFF5",
        lightGray: "#585858",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
