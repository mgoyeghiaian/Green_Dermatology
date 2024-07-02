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
        'footer-backgroud': "#e1d1c2",

      },
      fontFamily: {
        sans: ['Myriad Pro', 'sans-serif'],
      },
      backgroundImage: {
        'hero-background': "url('/src/assets/slider.jpg')",
        'services-background': "url('/src/assets/services-background.jpg')",
        'getintouch-background': "url('/src/assets/contact-form-background.jpg')",
      },
    },
  },
  plugins: [],
}
