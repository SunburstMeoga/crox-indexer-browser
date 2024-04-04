/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'menu-black': '#020202',
        'title-green': '#BDFF00',
        'line-gray': '#4C4C4C',
        'word-gray': '#DDDDDD',
        'search-gray': '#CDCDCD',
        'search-line': '#383838',
        'primary-green': '#ADFF00'
      }
    },
  },
  plugins: [],
}