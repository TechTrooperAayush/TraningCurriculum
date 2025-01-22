/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
      xl: ['412px 1px 294px 1px 412px'],
       lg : ['412px 1px 294px 1px'],
       md : ['390px 1px 294px'],
       sm : ['330px 274px'],
       mobdevice : ['360px']
      },
      gridTemplateRows: {
       lg : ['463px 204px'],
       md : ['463px 463px'],
        sm : ['390px 330px 230px'],
     mobdevice :  ['390px 330px 250px']
      }
    },
  },
  plugins: [],
}