/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ 指定 Tailwind 扫描哪些文件以生成样式类
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  // ✅ 启用 class 控制的暗色模式（可选）
  darkMode: 'class',

  theme: {
    extend: {
      // ✅ 可在此扩展自定义颜色、字体、间距等
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'ui-sans-serif', 'system-ui'],
      },
    },
  },

  // ✅ 如果你使用了动态类名，建议添加 safelist
  safelist
