/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black-dark": "#00000050",
        "dull-white": "#ffffffb3",
        "white-light": "#ffffff30",
        "white-medium": "#ffffff40",
        "neon-blue": "#2fb8ff",
      },
    },
  },
  plugins: [],
};
