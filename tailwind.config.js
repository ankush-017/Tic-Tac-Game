/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #f857a6, #ff5858)',
        'tic': 'linear-gradient(to right, #c21500, #ffc500)',
      },
    },
  },
  plugins: [],
}

