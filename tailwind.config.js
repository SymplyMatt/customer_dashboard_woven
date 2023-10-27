/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'blue': '#3490dc', // You can use the color code you prefer
      },
      screens: {
        'sm': '640px',
        'md': '1000px', 
        'lg': '1280px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}

