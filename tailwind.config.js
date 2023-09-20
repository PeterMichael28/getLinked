/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: "#D434FE",
        primary: "#150E28", 
        secondary: "#903AFF", 
    },
    backgroundImage: {
      bgBlur:
          "url('/bg-blur.png')",
  
      bgGradient:
          "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      btnHover:
        "linear-gradient(140deg, transparent 0%, #00f0ff 50%, transparent 100%)",
      bgUnderlay: 
        "url('./src/assets/underlay.png')"
  },
    },
  },
  plugins: [],
}

