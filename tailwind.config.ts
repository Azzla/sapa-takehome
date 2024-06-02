import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        'green-one': '#103c00',
        'green-two': '#35711f',
        'green-three': '#60a543',
        'green-four': '#e6efc5',
        'tan-one': '#4f463c',
        'tan-two': '#e7cbaf',
        'grey-one': '#333333',
        'grey-two': '#808080',
        'grey-three': '#f2f2f2',
        'white': '#ffffff'
    },
    extend: {
      backgroundImage: {
        "header-image": "url('./assets/TopHeaderImage.png')",
        "header-image-2x": "url('./assets/TopHeaderImage@2x.png')",
        "review-banner": "url('./assets/Review Banner.png')",
        "review-banner-2x": "url('./assets/Review Banner@2x.png')",
      },
      maxWidth: {
        'half': '50%',
      },
    },
  },
  plugins: [],
};
export default config;
