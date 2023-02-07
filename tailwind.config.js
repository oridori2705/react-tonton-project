/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-10%)',
          'animation-timing-function': 'cubic-bezier(0.1, 0.2, 0.2, 0.1)',
        },
        '50%': {
          transform: 'none',
          'animation-timing-function': 'cubic-bezier(20 , 0.1 , 0.1 , 0.1)',
        },
      },
    },
  },
  plugins: [],
}
