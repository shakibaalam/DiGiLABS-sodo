/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5555FF",
          "secondary": "#242464",
          "accent": "#FCAF3B",
          "neutral": "#171740",
          "base-100": "#FAF7F5",
          "blue": "#242464",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
