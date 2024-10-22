/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',    // App Router
    './pages/**/*.{js,ts,jsx,tsx}',  // If using Pages Router
    './components/**/*.{js,ts,jsx,tsx}',  // Components directory
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },  
  plugins: [],
}
