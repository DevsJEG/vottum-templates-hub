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
        primarytext: "rgba(0, 2, 142, 1)",
        primaryalpha: "rgba(238, 242, 255, 1)",
        secondarytext: 'rgba(107, 114, 128, 1)',
        customblue: 'rgba(79, 70, 229, 1)',
        customdarkblue: 'rgba(0, 2, 142, 1)',
        link:"rgba(55, 65, 81, 1)",
        gray: "rgba(243, 244, 246, 1)",
      },
      letterSpacing: {
        large:  '.05em'
      }
    },
  },
  plugins: [],
};
export default config;
