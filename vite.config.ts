// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [
//     // The React and Tailwind plugins are both required for Make, even if
//     // Tailwind is not being actively used – do not remove them
//     react(),
//     tailwindcss(),
//   ],

// })


import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // 1. Import this module

// ... imports ...

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // 1. "main" is your new Home (formerly Landing.html, now index.html)
        main: resolve(__dirname, 'index.html'),

        // 2. "app" is your Dashboard (formerly index.html, now App.html)
        app: resolve(__dirname, 'App.html'),

        // 3. "profile" stays the same
        profile: resolve(__dirname, 'Profile.html'),
      },
    },
  },
})