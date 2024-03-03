// tailwind.config.cjs
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@catppuccin/tailwindcss"),
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
};
