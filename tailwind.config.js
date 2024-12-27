/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': "#3238f2",
        'goldenrod': "rgb(202,138,4)",
      },
      fontFamily: {
        'dispaly': ['Poppins', 'sans-serif'],
        'body': ['inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

