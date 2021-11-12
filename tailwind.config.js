module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'blue_secundary': '#0F044C',
      'white': '#ffff',
      'black': '#000000',
      'gray_primary': '#678983'
    }),
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'blue_secundary': '#0F044C',
       'white': '#ffff',
       'black': '#000000',
       'gray_primary': '#678983'
     }),
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
