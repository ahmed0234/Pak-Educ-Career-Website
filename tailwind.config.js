/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // If using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components directory
    "./components/client/**/*.{js,ts,jsx,tsx}", // Components directory
  ],
  theme: {
    screens: {
      "sm": "640px",

      "md": "768px",
      // => @media (min-width: 640px) { ... }

      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",

      "2xl": "1536px",
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
