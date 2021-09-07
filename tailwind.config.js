const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'default' : ['Favorit Pro', 'sans-serif'],
      'title' : ['Whyte Inktrap', 'sans-serif'],
      'subtitle': ['Alegreya', 'serif'],
    },
    // custom screens
    screens: {
      'max-sm': { max: '550px' },
      'max-md': { max: '768px' },
      'max-lg': { max: '1024px' },
      'max-xl': { max: '1280px' },
      ...defaultTheme.screens,
    },
    extend: {
      height: {
        'screen-1/2': '50vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '80vh': '80vh',
      },
      colors: {
        black: '#000',
        white: '#FFF',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      },
      transitionProperty: {
        background: 'background',
      },
    },
  },
  variants: {
    extend: {},
    margin: ['responsive', 'hover', 'first'],
  },
  plugins: [],
}
