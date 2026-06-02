import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1B2A4A",
        gold: "#C5A55A",
        soft: "#F7F7F7",
        ink: "#333333"
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 18px 45px rgba(27, 42, 74, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
