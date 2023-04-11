/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'milligram': ['Milligram-Heavy'],
        'spacemono': ['Space Mono']
      }
    },
  },
  plugins: [],
}

