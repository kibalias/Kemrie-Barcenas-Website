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
        'Josefin': ['Josefin Sans'],
        'Poppins': ['Poppins'],
        },

      colors: {
        'reddish': '#A55959',
        'violet': '#A58CB3',
        'darkviolet': {
          '100': '#7D5892',
          '200': '#69437D'
        },
        'darkred': '#650E0E',
        'lightgray': '#EAE7FA',
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
    
  ],
}
