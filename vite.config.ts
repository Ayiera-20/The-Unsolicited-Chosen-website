import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    imagetools(),
    react(),
    tailwindcss(),
  ],
  base: command === 'build' ? '/The-Unsolicited-Chosen-website/' : '/',
}))
