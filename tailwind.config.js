/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#D0D6F9',
          900: '#0B0D17',
        },
        
      },
      fontFamily: {
          barlow: ['Barlow', 'serif'],
          'barlow-condensed': ['Barlow Condensed', 'serif'],
          bellefair: ['Bellefair', 'serif'],
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(100vh)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        ["slide-in"]: "slideIn .2s ease-in-out forwards",
        ["fade-in"]: "fadeIn .2s ease-in-out forwards",
      },
    },
    plugins: [],
  },  
};

