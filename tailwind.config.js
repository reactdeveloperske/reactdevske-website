/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      'h1': ['40px', '40px'],
      'h2': ['32px', '36px'],
      'h3': ['28px', '32px'],
      'h4': ['20px', '24px'],
      'h5': ['16px', '24px'],
      'h6': ['12px', '12px'],
      'bdy-lg': ['20px', '24px'],
      'bdy-rg': ['16px', '20px'],
      'bdy-sm': ['12px', '16px']
    },
    colors: {
      'white':'#FFFFFF',
      'red': '#EC0505',
      'green': '#09C65C',
      'light-green': 'rgba(222, 248, 233, 0.72);',
      'text-gray': '#3A3A3A',
      'text-black': 'rgba(0, 0, 0, 0.44)',
      'hero-overlay': 'rgba(217, 217, 217, 0.22);'
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'], 
        'inter': ['Inter', 'sans-serif'], 
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/forms')
  ],
}