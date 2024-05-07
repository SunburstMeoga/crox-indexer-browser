/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      const value = ((index + 1) / 10).toFixed(1);
      const [integerPart, decimalPart] = value.split('.');
      const key = `${integerPart}-${decimalPart}`;
      const formattedValue = `${integerPart}.${decimalPart}`;
      map[key] = `${formattedValue}rem`;
      return map;
    }, {}),
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
        'copy-icon': '#717FFF',
        'card-green': 'rgba(94,214,0,0.43)',
        'title-blue': '#003CFF',
        'card-gray': '#1D1D1D',
        'card-line': '#3A3A3A',
        'card-black': '#1E1E1E',
        'black-line': '#4a4a4a',
        'decline-red': '#FF1C7B',
        'line-blue': 'rgba(133,142,161,0.37)',
        'line-transction': '#3B3B3B',
        'trans-gray': '#5E5E5E',
        'trans-line': '#C9C9C9',
        'trans-hover': '#202020',
        'down-icon': '#D9D9D9',
        'search-border': 'rgba(169,169,169,0.6)',
        'select-item': '#A9A9A9',
        'home-line': '#2C2C2C'
      },
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
      lineHeight: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
}