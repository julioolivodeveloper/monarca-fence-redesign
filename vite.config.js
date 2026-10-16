import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site from /monarca-fence-redesign/; local dev and preview stay at /.
export default defineConfig({
  base: process.env.PAGES_BASE || '/',
  plugins: [react()],
})
