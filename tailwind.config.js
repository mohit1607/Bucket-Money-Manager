/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '380px',
      'sm': '567px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'primary': '#1325C9',
      'secondary': '#D0D5FB',
      'accent': '#162BE9',
      'background': '#ffffff',
      'background-dark': '#000000',
      'primary-dark': '#3649EC',
      'secondary-dark': '#04092F',
      'acccent-dark': '#162BE9',
      'dark': '#020417',
      'light': '#E8EAFD'
    },
  },
  plugins: [],
}

