/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tam-blue': '#0b9fd9', // Ana mavi renk
        'tam-dark': '#060502', // Koyu yeşil/siyah
        'tam-light': '#ffffff', // Beyaz
        'tam-accent': '#0891b2', // Daha koyu mavi hover için
      },
      fontFamily: {
        'exo2': ['Exo 2', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Exo 2', 'sans-serif'],
        'heading': ['Exo 2', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
