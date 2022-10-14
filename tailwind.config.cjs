/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        '2xl': 32,
      },

      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#FFF',

        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          400: '#7C7C8A',
          900: '#121214',
        },

        cyan: {
          200: '#B4EBFF',
          500: '#81D8F7',
        }
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
