/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark-to-light-blue":
          "linear-gradient(to bottom right, #326789, #78A6C8);",
      },
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
      wave: {
        "0%": { transform: "rotate(0.0deg)" },
        "10%": { transform: "rotate(14deg)" },
        "20%": { transform: "rotate(-8deg)" },
        "30%": { transform: "rotate(14deg)" },
        "40%": { transform: "rotate(-4deg)" },
        "50%": { transform: "rotate(10.0deg)" },
        "60%": { transform: "rotate(0.0deg)" },
        "100%": { transform: "rotate(0.0deg)" },
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
      wave: "wave 2s linear infinite",
      float: "float 3s ease-in-out  infinite",
    },
  },
  plugins: [],
};
