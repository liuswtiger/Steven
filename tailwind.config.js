/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  safelist: [
    'text-red-500',
    'bg-gray-100',
    'dark:bg-gray-900',
    'dark:text-gray-100',
    'hover:text-primary',
  ],
};
