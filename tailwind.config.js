const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      red: colors.red,
      blue: colors.blue,
      orange: colors.orange,
      green: colors.green,
      primary: '#38B9C7',
      secondary: '#9F399C',
    },
    extend: {
      boxShadow: {
        't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      minHeight: {
        10: '2.5rem',
        12: '3rem',
      },
    },
  },
  plugins: [],
};
