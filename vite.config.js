import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096,

    // ✅ 允许 Tailwind CSS 拆分为独立文件，确保样式能被正确加载
    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      }
    }
  },

  // ✅ 设置基础路径，适配 Cloudflare Pages 根目录部署
  base: './'
})
