/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'whiteColor': '#ffffff',
      'primaryColor': '#00AEEF',
      'secondaryColor': '#00395d',
      'lightSecondaryColor' : '#014975',
      'borderColor' : '#DCDCDC',
      'red' : '#DB2700',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}