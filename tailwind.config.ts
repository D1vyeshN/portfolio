import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      fontFamily: {
        solitreo: ["Solitreo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        grotrsk: ["Space Grotesk", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        robotoMono: ["Roboto Mono", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
export default config;
