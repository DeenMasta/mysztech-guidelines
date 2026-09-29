import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const excludeLocalTinaAdmin = () => ({
  name: 'exclude-local-tina-admin',
  closeBundle: () => rm(resolve('dist/admin/index.html'), { force: true }),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), excludeLocalTinaAdmin()],
  server: {
    host: true, // Listens on 0.0.0.0 (all LAN IPs)
    port: 5173,
  },
})
