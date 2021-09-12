const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      default: ['Favorit Pro', 'sans-serif'],
      title: ['Whyte Inktrap', 'sans-serif'],
      subtitle: ['Alegreya', 'serif'],
    },
    // custom screens
    screens: {
      'max-sm': { max: '550px' },
      'max-md': { max: '768px' },
      'max-lg': { max: '1024px' },
      'max-xl': { max: '1280px' },
      ...defaultTheme.screens,
    },
    flexGrow: {
      '1': 1,
      '2': 1,
    },
    extend: {
      height: {
        'screen-1/2': '50vh',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '32px': '32px',
        '24px': '24px',
      },
      width: {
        '24px': '24px',
        '32px': '32px',
        '36rem': '36rem',
        '56rem': '56rem',
        '60rem': '60rem',
        'familyButton': 'calc((100% / 3) + 1.75rem)',
        'firstFamilyButton': 'calc(100% / 3)'
      },
      colors: {
        culture: '#D66A51',
        interview: '#DEFE71',
        food: '#C9C8BF',
        infographic: '#9FF7CD',
        events: '#E9C4DD',
        locavore: '#789578',
        nightrooster: '#91C1E4',
        localparts: '#C06467',
        nusantara: '#E18065',
        localab: '#BC9EDF',
        togo: '#C2D09A',
        grayBorder: '#676767',
        grayCard: '#F0F0F0',
        grayDarkerCard: '#DEDCDA',
      },
      inset: {
        '-0.5': '-0.5px',
      },
      zIndex: {
        min1: '-1',
      },
      borderRadius: {
        '50%': '50%',
      },
    },
  },
  variants: {
    extend: {},
    margin: ['responsive', 'hover', 'first'],
  },
  plugins: [require('tailwindcss-padding-safe')()],
}
