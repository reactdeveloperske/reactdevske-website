/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 10s linear infinite',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
