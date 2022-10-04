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
      extend: {
        height: {
          '55/6': '90%',
        },

        backgroundImage: {
          // 'fondo1': "url('./src/assets/elefante/background.png')",
          // 'footer-texture': "url('/img/footer-texture.png')",
        }

      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
