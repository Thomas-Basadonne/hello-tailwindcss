/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    // se sta fuori extend devi riscriverli tutti se invece sta dentro extend si appoggia alle classi tailwind e aggiunge solo la tua modifica
    // fontSize: {},
    extend: {
      // con questo fontsize sm è piu grande di md
      fontSize: {
        sm: "18px",
      },

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
