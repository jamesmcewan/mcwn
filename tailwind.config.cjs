// tailwind.config.cjs
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      backgroundImage: {
        "checkerboard": "url('/images/bg.png')",
      },
      fontFamily: {
        body: ["Playfair Display", "serif"],
        basic: ["basic-sans", "sans-serif"],
        loslana: ["loslana-niu-pro", "sans-serif"],
      },
    },
  },
};
