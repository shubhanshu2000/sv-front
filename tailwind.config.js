/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img":
          "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.55) 100%), url('/src/asset/hero.jpg')",
      },
    },
  },
  plugins: [],
};
