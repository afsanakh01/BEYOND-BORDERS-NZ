import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        navyMid: "#1A3A5C",
        gold: "#C8A96E",
        offWhite: "#FAFAF8",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        outfit: ["var(--font-outfit)"],
      },
      letterSpacing: {
        cinematic: "0.25em",
        tightest: "-0.05em",
      },
    },
  },
  plugins: [],
};
export default config;
