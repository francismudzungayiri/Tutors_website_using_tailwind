/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      'red': '#ec343c',
      'blue': '#423e95',
      'white': '#ffffff',
      'light-grey':' #f8f8f8',
      'light-green':'#D4ECDD',
      'dark-grey': '#686D76',
      'beige': '#F9F5EB',
      'transparent': 'transparent',
    },
    fontFamily:{
      headings: ['Gambarino', 'serif'],
      paragraphs:['Switzer', 'sans-serif']
    }
  },
  plugins: [],
}

