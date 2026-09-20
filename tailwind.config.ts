import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bsem: {
          dark: "#121212",
          grey: "#1E1E1E",
          lightGrey: "#2D2D2D",
          orange: "#FF6B00",
          lightOrange: "#FF8A33",
        }
      }
    },
  },
  plugins: [],
};
export default config;