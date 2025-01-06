/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx , './src/main.css'}", 
    "./public/index.html",        // Ensure HTML is included if applicable
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
