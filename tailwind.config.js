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
        robotomono: ['Robot Mono', 'monospace'],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
