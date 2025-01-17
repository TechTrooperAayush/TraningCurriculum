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
    },
  },
  plugins: [],
}