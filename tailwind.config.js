/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'beige-100': '#efe6dc',
        'beige-200': '#e7d9cc',
        'accent-orange': '#f07b2d',
      },
    },
  },
  plugins: [],
};
