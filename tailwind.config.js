/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#f5fbff',
        'primary': "#36454F",
        'secondary': '#f1e8db',
        'tertiary': '#128b3f',
        'secondary-green': '#41a265',

      },
      fontFamily: {
        sans: ['Myriad Pro', 'sans-serif'],
      },
      backgroundImage: {
        'header': "url('/src/assets/Background_Main.jpg')",
        'firstsection': "url('/src/assets/Background_Main.jpg')",
        'getintouch': "url('/src/assets/Background_Main.jpg')",
      },
    },
  },
  plugins: [],
}
