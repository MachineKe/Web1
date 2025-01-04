/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          light: '#DCF8C6',
        },
      },
    },
  },
  plugins: [],
}