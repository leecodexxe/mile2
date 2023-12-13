
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/public/neonBoard.jpg')",
      }
    },
  },
  plugins: [],
}

