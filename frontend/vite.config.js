import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // Ensure this is correct
//     },
//   },
  // server: {
  //   port: 5173,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5000",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
// })



export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure this is correct
    },
  },
  // server: {
  //   port: 3000,
  // },
  build: {
    outDir: "dist",
    minify: "esbuild",  // Use esbuild for faster builds
  },
});
