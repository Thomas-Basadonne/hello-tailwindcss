/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ghost: {
          100: "#871c94",
          200: "#410647",
        },
      },
    },
  },
  plugins: [],
};
