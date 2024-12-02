/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "very-dark-grey": "#18171f",
      "dark-grey": "#24232c",
      "grey": "#817d92",
      "almost-white": "#e6e5ea",
      "neon-green": "#a4ffaf",
      "yellow": "#f8cd65",
      "orange": "#fb7c58",
      "red": "#f64a4a"
    }
  },
  plugins: [],
}