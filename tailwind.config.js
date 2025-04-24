/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  safelist: [
    "bg-nubank",
    "flex-row",
    "flex-wrap",
    "gap-1",
    "text-nubank",
    "text-lg",
    "gap-x-1",
    "mt-8",
    "bg-gray-200",
    "h-1",
    "text-xl",
    "text-gray-600",
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        nubank: '#8209d2',
      }
    },
  },
  plugins: [],
};
