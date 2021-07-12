const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'serif': ['Nunito Sans'],
        'mono': ['Roboto Mono'],
      },
      colors:{
        'lime': colors.lime,
        'orange': colors.orange,
      }

    },
  },
  variants: {
    extend: {
	    animation: ['group-hover', 'hover', 'focus'],
	    textColor: ['group-hover', 'hover', 'focus']
    },
  },
  plugins: [
	  require('@tailwindcss/forms'),
  ],
}
