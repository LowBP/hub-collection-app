/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        'med': '90%', // Adjust the width as needed
      },
      minHeight: {
        'min-h-48': '12rem'
      },
      height: {
        '500': '500px' // Custom height utility class
      }
    },
  },
  plugins: [],
}

