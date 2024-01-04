/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        melrose: {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ded6fe',
          '300': '#c4b5fd',
          '400': '#a28bfa',
          '500': '#7c5cf6',
          '600': '#5f3aed',
          '700': '#4d28d9',
          '800': '#4021b6',
          '900': '#361d95',
          '950': '#221065',
        },
      },
    }
  },
  plugins: [],
}

