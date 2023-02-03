import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import http from "https";


// https://vitejs.dev/config/

export default defineConfig({
  server: {
    proxy: {
        "/api": 
        // "http://localhost:8080"
        
        {
            target: 'http://localhost:8080',
            changeOrigin : false,
            rewrite: (path) => path.replace(/^\/api/, "")
            // ,
            // agent: new http.Agent()
          
        }
    }
},

  plugins: [react()]
})

