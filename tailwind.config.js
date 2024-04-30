/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-[#b095f6]',
    'bg-[#f0a177]',
    'bg-[#e6ee96]',
    'bg-[#ffcf7d]',
    'bg-[#55cffa]',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}