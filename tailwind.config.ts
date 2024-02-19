import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "15px",
        },
      },
      screens: {
        sm: "685px",
        xmd: "1100px",
        md: "1008px",
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
