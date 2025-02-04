import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-2xl': '1920px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #3C65F4, #3C64F3, #3C65F4)',
      },
    },
  },
  plugins: [daisyui],
}