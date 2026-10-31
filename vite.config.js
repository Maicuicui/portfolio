import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 相对路径：兼容 GitHub Pages 的 /portfolio/ 子路径部署
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
