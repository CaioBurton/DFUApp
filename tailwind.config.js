/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#003A67",
        black: {
          DEFAULT: "#000000",
          100: "171A1F",
        },
        gray: {
          100: "#F3F4F6",
          200: "#BCC1CA",
          300: "#9095A0",
          400: "#6E7787",
          500: "#424955"
        },
        blue: '#179FBD',
        yellow: "#FFD54C",
        green: "1DD75B"
      }
    },
  },
  plugins: [],
}

