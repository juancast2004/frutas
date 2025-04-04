import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Frutería Juan',
        short_name: 'Frutería Juan',
        description: 'Aplicación de gestión para Frutería Juan',
        theme_color: '#4CAF50',
        icons: [
          {
            src: '/logo-juan.png', // Usa la misma imagen o una versión cuadrada
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo-juan.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})