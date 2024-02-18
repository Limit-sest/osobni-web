/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '18': '70px'
      },
    },
  },
  plugins: [
    require('tailwindcss-touch')(),
  ],
  modules: {
    shadows: ['responsive', 'hover', 'focus', 'hover-hover', 'hover-none'],
  },
}