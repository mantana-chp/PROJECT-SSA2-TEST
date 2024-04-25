// /** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        mali: ['Mali', 'sans']
      }
    }
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
  daisyui: {
    themes: []
  }
}
