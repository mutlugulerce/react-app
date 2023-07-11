/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'emekli': "url('/public/pexels-pixabay-302083.jpg')",
       
       }
    },
  },
  plugins: [],
}