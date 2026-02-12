import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "hhtp://dalbacarrasco.github.io/to-do-list-react",
  plugins: [react()],
})
