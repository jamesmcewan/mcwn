// tailwind.config.cjs
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      display: ["Cherry Cream Soda", "serif"],
      body: ["PT Sans", "sans-serif"],
    },
    colors: {
      "y3-r2": "#FBC991",
      "y-r-b": "#252920",
      "y-r-b4": "#772C26",
      "y2-r3-b2": "#D392AA",
      "r2-b2": "#D8C7E3",
      "r3-b3": "#AB8CC1",
      "y4-r-b4": "#4C2B44",
    },
  },
};
