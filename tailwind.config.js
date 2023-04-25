/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#9DA993",
      "light-green": "#98B66E",
      yellow: "#F9D876",
      "light-yellow": "#FBE39D",
      brown: "#BCA88E",
      "dark-brown": "#8D795F",
      "icy-white": "#E3E8E9",
      "dark-green": "#9DA993",
      pink: "#E4B4B4",
      white: "#FFF",
      black: "#464646",
    },
    extend: {
      fontFamily: {
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
        mukta: ["Mukta", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
