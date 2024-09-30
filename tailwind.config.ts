import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#eeeeee",
        secondary: "#000000",
        tertiary: "#1539f5", 
        transparent: "#00FF0000"
      }
    },
  },
  plugins: [],
};
export default config;
