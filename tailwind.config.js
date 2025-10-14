/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      
      colors: {
        'primary': '#4CAF50',  
        'secondary': '#FFC107', 
        'neutral-light': '#F5F5F5', 
        'neutral-dark': '#424242',   
      },
    },
  },
  plugins: [],
}