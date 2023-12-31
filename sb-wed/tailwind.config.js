
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Amatic: "'Amatic SC, cursive",
        Montserrat: "Montserrat"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

