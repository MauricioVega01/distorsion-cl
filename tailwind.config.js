/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0908",
        surface: "#151312",
        surface2: "#1e1b1a",
        bone: "#f2ede8",
        bone2: "#a89f97",
        clip: "#ff2b2b",
        cyan: "#00e0ff",
        magenta: "#ff2b8f",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
}

