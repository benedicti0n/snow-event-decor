import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbf6e9",
        text: "#1a3636",
        roseGold: "#F9C0AB"
      },
    },
    fontFamily: {
      bacasime: ["BacasimeAntique", "Arial", "Helvetica", "sans-serif"],
    }
  },
  plugins: [],
} satisfies Config;
