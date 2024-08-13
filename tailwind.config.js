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
        blue: "rgb(var(--blue)) ",
      },
      backgroundColor: {
        light: "rgb(var(--light)) ",
        dark: "rgb(var(--dark)) ",
        primary: "rgb(var(--primary)) ",
        yellow: "rgb(var(--yellow)) ",
        blue: "rgb(var(--blue)) ",
      },

      fontFamily: {
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
