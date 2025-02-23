import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  redirects: { '/posts/[...slug]': '/post/[...slug]' },
  site: 'https://mightydinosaur.dev/',
  vite: {
    plugins: [tailwindcss()],
  },
})
