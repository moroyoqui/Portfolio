import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Set to your repo name with leading/trailing slashes
  plugins: [react()],
})
