/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.ejs',
    './vies/partials/*.ejs'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
