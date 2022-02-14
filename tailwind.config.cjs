// tailwind.config.cjs
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      display: ["Permanent Marker", "san-serif"],
      body: ["Merriweather", "serif"],
    },
  },
};
