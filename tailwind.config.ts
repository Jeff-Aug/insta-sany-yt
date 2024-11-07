import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1d3531',
        'green-actived': '#5d8a83',
        'green-border': '#2a4b46',
        'green-btn': '#ccec60',
        'green-title-card': '#719d96',
      },
      maxWidth: {
        grid: '77.5rem',
        'area-icons': '54rem',
        'area-mockup': '60rem',
        'area-cards': '83rem',
      },
      height: {
        'text-hero': '66px',
        'sectoin-hero': '55rem',
        'area-cards': '35rem',
      },
      backgroundImage: {
        'hero': 'url("/bg-hero.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
