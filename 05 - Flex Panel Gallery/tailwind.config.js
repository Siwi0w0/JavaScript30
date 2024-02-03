/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }){
      const newUtilities = {
        '.click-open.active': {
          'flex': '5',
          'transition': 'font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s'
        },
        '.click-open.active p': {
          'transform': 'translateY(-100%)',
          'font-size': '3em',
          'margin': '10px',
          'transition': 'transform 0.7s',
        },
      };

      addUtilities(newUtilities, ['active']);
    }
  ]
}

