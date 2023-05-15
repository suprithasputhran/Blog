/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
      },
      fontFamily: {
        Lora:["Lora, sans-serif"],
        PlayFair:["Playfair Display, sans-serif"],
        Poly:[" Poly, sans-serif"],
        Raleway:["Raleway, sans-serif"],
        Varela:["Varela Round, sans-serif"],
        Comfortaa:["Comfortaa, sans-serif"],
        Yatra:["Yatra One, sans-serif"]
      },
      colors: {
        "top-foot":"#2881A0",
        "hover-text":"#9DCFE0",
        "header-text":"#012C3A"
      },
      // container: {
      //   padding: "1rem",
      //   center: true,
      // },
    },
  },
  plugins: [],
}

