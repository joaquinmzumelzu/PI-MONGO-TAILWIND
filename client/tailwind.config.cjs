/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        checkout: '0px 1px 1px rgba(217, 33, 171, 0.56), 0px 3px 7px rgba(217, 33, 171, 0.56)'
      },
      height:{
        card: '370px'
      }
    },
  },
  plugins: [],
}
