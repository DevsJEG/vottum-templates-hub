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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgba(0, 2, 142, 1)",
        primaryalpha: "rgba(238, 242, 255, 1)",
        secondarytext: 'rgba(107, 114, 128, 1)'
      },
    },
  },
  plugins: [],
};
export default config;
