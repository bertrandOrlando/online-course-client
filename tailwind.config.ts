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
        background: "#1C9E9E",
        primary: "#02C29A",
        secondary: "#05698D",
        accent: "#00271F",
      },
    },
  },
  plugins: [],
} satisfies Config;
