/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/index_mock.html"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        honey : '#EC9706',
        fire: '#DD571C',
        slate_grey:"#2B4E47",
        rust:"#A74B1C",
        sunray:"#E4A94B",
        pewter_blue:"#7F9DA8",
        clay_red:"#B76160",
        bistre:"#3E2308",
        khaki_web:"#C6B299",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
