// tailwind.config.cjs
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  plugins: [require("@tailwindcss/typography"), require('@catppuccin/tailwindcss'),],
  theme: {
    extend: {
      backgroundImage: {
        "checkerboard": "url('/images/bg.png')",
      },
      fontFamily: {
        basic: ["basic-sans", "sans-serif"],
        loslana: ["loslana-niu-pro", "sans-serif"],
        mixta: ['mixta-didone-alt', 'serif'],
      },
    },
  },
};
