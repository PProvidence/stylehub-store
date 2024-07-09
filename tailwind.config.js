/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'style-deep-purple': '#1E1E1E',
        'style-gray': '#9E9B9B',
        'style-lilac': '#F3D9FF',
        'style-purple': '#7707BB',
        'style-yellow': '#FFBA69',
        'style-red': '#F68181',
        'style-white': '#FEF9F9',    
        'style-ash': '#6C6B6B',    
      },

      fontFamily: {
        Manrope: [ "Manrope", "sans-serif"],
        Inter:["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}

