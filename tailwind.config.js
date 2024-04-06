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
        'primary-green': '#ADFF00',
        'black-0.58': 'rgba(0,0,0,0.58)',
        'black-0.78': 'rgba(0,0,0,0.78)',
        'select-color': '#808080',
        'module-title': '#242424',
        'copy-icon': '#717FFF'
      }
    },
  },
  plugins: [],
}