import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built assets work no matter where the static files are
// hosted (GitHub Pages subpath, Netlify, S3, etc.) and embedded via iframe.
export default defineConfig({
  plugins: [react()],
  base: './',
})
