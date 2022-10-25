/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0069B4',
        'secondary': '#007EC3'
      },
      fontFamily: {
        'sans': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
