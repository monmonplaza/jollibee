/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        light: "rgb(var(--light))",
        dark: "rgb(var(--dark))",
        primary: "rgb(var(--primary)) ",
        yellow: "rgb(var(--yellow)) ",
      },
      backgroundColor: {
        light: "rgb(var(--light)) ",
        dark: "rgb(var(--dark)) ",
        primary: "rgb(var(--primary)) ",
        yellow: "rgb(var(--yellow)) ",
      },

      fontFamily: {
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
