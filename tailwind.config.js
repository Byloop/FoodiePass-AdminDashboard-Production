/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem', // small
      base: '1rem', // body2 16
      lg: '1.125rem', // body1 18
      xl: '1.25rem', // h6 20
      '2xl': '1.5rem', // h5 24
      '3xl': '2rem', //h4 32
      '4xl': '3rem', // h3 48
      '5xl': '3.25rem', // h2 52
      '6xl': '4rem', // h1 60
      '7xl': '5rem', // h1
      '8xl': '8rem', // big
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xlg: '1436px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        blue: '#004D9B',
        yellow: '#FFCA40',
        lightBlue: '#004e9b1a',
        lightRed: '#FFD8D4',
        lightGreen: '#D0FFD1',
        red: '#E52614',
        gray1: '#F9F9F9',
        gray2: '#DED2D9',
        gray3: '#D9D9D9',
        gray4: '#959895',
        gray5: '#828282',
        green: '#31A331',
      },
    },
  },
  plugins: [],
};
