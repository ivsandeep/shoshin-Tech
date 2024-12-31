const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-blue':'#0a337a',
        'custom-blue-2':'#161E54',
        'custom-blue-3':'#1B204A',
      }
    },
  },
  plugins: [],
}