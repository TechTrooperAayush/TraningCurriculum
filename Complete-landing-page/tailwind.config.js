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
        footerxl: ['412px 1px 294px 1px 412px'],
         footerlg : ['412px 1px 294px 1px'],
         footermd : ['390px 1px 294px'],
         footersm : ['330px 274px'],
         mobdevice : ['350px'],
         heroxl:['526px 720px'],
         herolg:['392px 700px'],
        },
        gridTemplateRows: {
         footerlg : ['463px 204px'],
         footermd : ['463px 463px'],
          footersm : ['390px 330px 230px'],
       mobdevice :  ['390px 270px 250px']
        }
      }
  },
  plugins: [],
}