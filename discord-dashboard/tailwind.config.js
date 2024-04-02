const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.css'],
  content: [],
  theme: {
    extend: {
      colors: {
        Primary: '#202225',
        Secondary: '#5865f2',
        gray: colors.neutral,
      }
    },
  },
  plugins: [],
}

