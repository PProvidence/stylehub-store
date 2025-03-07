/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        // ...defaultTheme.screens,
      },

      colors: {
        'style-deep-purple': '#1E1E1E',
        'style-gray': '#9E9B9B',
        'style-lilac': '#F3D9FF',
        'style-purple': '#7707BB',
        'style-yellow': '#FFBA69',
        'style-red': '#F68181',
        'style-white': '#FEF9F9',    
        'style-ash': '#6C6B6B',   
        'style-lavender': '#D377FF',   
        'style-lavender-200': '#ECC9FD',
        'style-gray2': '#BEBCBC',
      },

      fontFamily: {
        Manrope: [ "Manrope", "sans-serif"],
        Inter:["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}

