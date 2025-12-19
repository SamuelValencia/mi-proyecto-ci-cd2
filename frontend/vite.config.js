import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Configuración de Vitest
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true,
    css: false,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
  }
})
