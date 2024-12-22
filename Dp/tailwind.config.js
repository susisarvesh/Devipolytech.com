/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgb(22, 163, 74)', // Add your custom color here
      },
      boxShadow: {
        'custom': '0px 8px 24px rgba(149, 157, 165, 0.2)',
      },
    },
  },
  plugins: [],
}
