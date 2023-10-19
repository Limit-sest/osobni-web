/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '18': '70px',
      },
      strokeWidth: {
        '3': '3',
      }
    },
  },
  plugins: [],
}