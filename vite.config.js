import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default {
  server: {
    host: 'softsell.local', // Custom local domain
    port: 5173, // Default Vite port, you can change this if needed
    https: false, // Set to true if you want to use HTTPS
  },
};
