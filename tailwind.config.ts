import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
        },
        fly: {
          from: { transform: "rotate(0deg) translateX(200px) rotate(0deg) " },
          to: {
            transform: "rotate(360deg) translateX(200px) rotate(-360deg)",
          },
        },
        flyRev: {
          from: {
            transform: "rotate(360deg) translateX(240px) rotate(-360deg)",
          },
          to: { transform: "rotate(0deg) translateX(240px) rotate(0deg) " },
        },
      },
      container: {
        padding: {
          DEFAULT: "15px",
        },
      },
      screens: {
        sm: "685px",
        xmd: "1100px",
        md: "1008px",
        s1: "1250px",
        slg: "1150px",
        lg: "1440px",
        xl: "1560px",
      },
      colors: {
        "primary-light": "#fff",
        "primary-dark": "#0B0B0B",
        "secondary-dark": "#252541",
        "secondary-dark-light": "#727272",
        accent: {
          orange: "#F89E52",
          blue: "#3482FF",
        },

        body: "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
