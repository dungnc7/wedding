import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: "var(--font-dancing-script), cursive",
        "great-vibes": "var(--font-great-vibes), cursive",
        montserrat: "var(--font-montserrat), sans-serif",
      },
      colors: {
        primary: {
          DEFAULT: '#4f8e62',
          light: '#e1f5e6',
          dark: '#3a6b49',
        },
        accent: '#ffd700',
      },
      backgroundColor: {
        'primary-light': '#e1f5e6',
      },
    },
  },
  plugins: [],
} as Config;

export default config;
