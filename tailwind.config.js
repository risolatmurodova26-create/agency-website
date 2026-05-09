module.exports = {
  content: ["./*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F7F7FA', // Тот самый премиальный фон
          accent: '#7B2FF7', // Ваш основной фиолетовый
          text: '#111111',
        }
      },
      fontFamily: {
        sans: ['Satoshi', 'Manrope', 'sans-serif'], // Современные шрифты
      },
    },
  },
  plugins: [],
}
