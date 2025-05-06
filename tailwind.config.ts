import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'font-great-vibes',
    'font-dancing',
    'font-montserrat',
    'text-4xl',
    'text-5xl',
    'text-3xl',
    'text-2xl',
    'text-7xl',
    'text-primary',
    'text-white',
    'mb-4',
    'mb-6',
    'text-center',
    // Thêm các class được sử dụng trong Header.tsx
    'hidden',
    'md:block',
    'md:hidden',
    'flex',
    'space-x-8',
    'justify-between',
    'items-center',
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'z-50',
    'bg-transparent',
    'bg-white',
    'text-gray-800',
    'hover:text-primary',
    'hover:text-accent',
    'transition-all',
    'transition-colors',
    'duration-300',
    'shadow-md',
    'py-2',
    'py-4',
    'px-4',
    'text-sm',
    'font-medium',
    'container',
    'mx-auto',
    'bg-primary',
    'inset-0',
    'flex-col',
    'justify-end',
    'p-4',
    'flex-1',
    'space-y-8'
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
};

export default config;
