/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html", // Include HTML files in public directory
    "./public/**/*.{js,ts,jsx,tsx}", // Include JS/TSX files in public directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
