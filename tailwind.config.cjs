/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      mono: ['Martian Mono', 'monospace'],
      kanit: ['Kanit, monospace']
    },
    extend: {
      colors: {
        'color-1': '#0048bd', // Reemplaza el valor '#abcdef' con tu propio color
      },
    },
  },
  plugins: [],
}
