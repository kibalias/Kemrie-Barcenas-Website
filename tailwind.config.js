/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald'],
        'permanentMarker': ['Permanent Marker'],
        'acme': ['Acme'],
        'abel': ['Abel'],
        'lato': ['Lato'],
        'Sofia': ['Sofia'],
        },

      colors: {
        'reddish': '#A55959',
        'violet': '#A58CB3',
        'darkred': '#650E0E',
        },

      width: {
          '120': '560px'
      },
      
      height: {
          '38': '152px'
      },
      borderWidth: {
        '25': '25px',
        '50': '50px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
