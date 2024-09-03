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
          100: "#171A1F",
        },
        gray: {
          100: "#F3F4F6", //usado como cor de fundo das sessões
          200: "#BCC1CA", //usado como cor das palavras padrão dentro de inputs como "Enter password" ou "Search"
          300: "#9095A0", //"Forgot password?" e "I agree with the Terms and Conditions"
          400: "#6E7787", //"OR LOGIN WITH" e "OR SIGN UP WITH"
          500: "#424955", //"Email" e "Password" acima dos inputs
          600: "#565E6C", //"Welcome back." e "Create a new account."
        },
        blue: '#179FBD',
        yellow: "#FFD54C",
        green: "#1DD75B"
      },
      fontFamily: {
        mthin: ["Montserrat-Thin", "sans-serif"],
        mextralight: ["Montserrat-ExtraLight", "sans-serif"],
        mlight: ["Montserrat-Light", "sans-serif"],
        mregular: ["Montserrat-Regular", "sans-serif"],
        mmedium: ["Montserrat-Medium", "sans-serif"],
        msemibold: ["Montserrat-SemiBold", "sans-serif"],
        mbold: ["Montserrat-Bold", "sans-serif"],
        mextrabold: ["Montserrat-ExtraBold", "sans-serif"],
        mblack: ["Montserrat-Black", "sans-serif"],
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
