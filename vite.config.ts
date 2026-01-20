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

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used - do not remove them
    react(),
    tailwindcss(),
  ],
  // 2. Add this build configuration
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landing: resolve(__dirname, 'Landing.html'),
        profile: resolve(__dirname, 'Profile.html'),
      },
    },
  },
})