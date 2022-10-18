/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      red: '#EC0505',
      blue: '#09AFC6',
      paleBlue: '#CEEDF4',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
