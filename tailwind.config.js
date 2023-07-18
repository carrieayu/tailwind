/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './Login.js',
    './Messages.js',
    './Contents.js',
    './Search.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-clip-path')],
};
