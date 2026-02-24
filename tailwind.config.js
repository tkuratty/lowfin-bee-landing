/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bee: {
          amber: '#f59e0b',
          yellow: '#fbbf24',
          dark: '#1a1a1a',
          light: '#fef3c7',
        },
        cream: {
          50: '#fefcf8',
          100: '#fef9f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
