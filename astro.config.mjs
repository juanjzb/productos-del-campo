import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import path from 'path'

export default defineConfig({
  output: 'static',
  site: 'https:/https://juanjzb.github.io/',
  base: 'productos-del-campo',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@assets': path.resolve('./src/assets'),
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
        '@data': path.resolve('./src/data')
      }
    }
  }
})
