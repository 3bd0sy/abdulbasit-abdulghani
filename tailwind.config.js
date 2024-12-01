/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#38B5FE"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      fontWeight: {
        semibold: 600,
        black:800,
        regular:200,
      },
    },
  },
  plugins: [],
}

