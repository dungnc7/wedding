import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f8e62',
          light: '#e1f5e6',
          dark: '#3a6b49',
        },
        accent: '#ff9d9d',
        textColor: '#333333',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        greatVibes: ['Great Vibes', 'cursive'],
        dancingScript: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-pattern.png')",
      },
    },
  },
  plugins: [],
}

export default config
