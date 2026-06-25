/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          bg: '#D3E3FD',
          hover: '#C2D7F5',
          active: '#4F46E5',
          border: '#BFD3F0',
          text: '#1E293B',
          muted: '#64748B',
        },
        brand: {
          DEFAULT: '#4F46E5',
          light: '#635BFF',
          dark: '#4338CA',
        },
        canvas: '#F5F6FA',
      },
    },
  },
  plugins: [],
}
