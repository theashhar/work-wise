/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          theme: {
            DEFAULT: "#FFBB00", // Base shade (vibrant yellow)
            50: "#FFF9E5", // Lightest shade (very light yellow)
            100: "#FFF3CC",
            200: "#FFE699",
            300: "#FFDA66",
            400: "#FFCD33",
            500: "#FFBB00", // Base shade
            600: "#CC9600", // Darker shade
            700: "#997000",
            800: "#664B00",
            900: "#332500", // Darkest shade (almost black with a yellow tint)
          },
        },
      },
      },
    
    plugins: [],
  };