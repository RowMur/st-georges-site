/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark-to-light-blue":
          "linear-gradient(to bottom right, #326789, #78A6C8);",
      },
      colors: {
        darkBlue: "#326789",
        blue: "#78A6C8",
        red: "#E65C4F",
        grey: "#E9EEF2",
        white: "#FFFFFF",
        black: "#252525",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%": {
            boxshadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
          "50%": {
            boxshadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(-10px)",
          },
          "100%": {
            boxshadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out  infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
