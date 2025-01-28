import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  experiments: {
    contentLayer: true,
  },
  output: 'static',
  site: 'https://mightydinosaur.dev/',
  vite: {
    plugins: [tailwindcss()],
  },
})
