/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#181818',
        white: '#FBFBFB',
        darkGrey: '#454545',
        lightGrey: '#F2F2F2',
        unactiveGrey: '#E0E0E0',
        grey: '#979696',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
