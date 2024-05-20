/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#74aed4',
        'regal-purple': '#cfafd4'
      },
    },
  },
  plugins: [],
}

