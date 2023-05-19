/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Just Another Hand", "cursive"],
      Jost: ["Jost"]
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/Background.svg')",
      }
    },
  },
  plugins: [
  ],
}