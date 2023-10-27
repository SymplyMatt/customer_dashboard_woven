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
      fontSize: {
        '10': '10px',
        '12': '12px',
        '16': '16px',
      },
      colors: {
        darkBrown: '#79242F',
        lightBlack: '#646668',
        navTitle: '#A4A6A8',
      },
      spacing: {
        '1': '5px',
        '2': '10px',
        '3': '12px',
        '11': '11px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '13': '50px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '30': '120px',
        '40': '160px',
        '50': '200px',
        '100': '400px',
      }, 
      minHeight: {
        '70': '70px',
      }, 
    },
  },
  plugins: [],
}

