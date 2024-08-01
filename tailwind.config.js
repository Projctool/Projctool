module.exports = {
    theme: {
      extend: {
        colors: {
          'primary': '#1B4E6E',
          
          'whitegray': '#F5F7FA',
          'lightgray': '#E0E3E9',
          grayblue: '#8E9AAB',
          textgray: '#030229',
          'orange': '#FF8F6B',
          'hush': '#F2F2F2',
          'lightblue': '#605BFF'

        },
        fontFamily: {
          nunito: ['Nunito', 'sans-serif'],
        },
        textShadow: {
            'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    plugins: [
        require('tailwindcss-textshadow')
    ],
  }