/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-white',
    'text-gray-900',
    'antialiased'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AF4D98',
        secondary: '#FF7B00',
        accent: '#FFE900',
        dark: '#002A55',
        teal: '#119DA4',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}