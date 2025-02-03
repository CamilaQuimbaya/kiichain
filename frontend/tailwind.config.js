/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-neon': "linear-gradient(to right,#0f0b11,#512383)",
      },
      colors: {
        'primary-purple': '#5b3d7d', // Color base
      },
    },
  },
  plugins: [],
};

