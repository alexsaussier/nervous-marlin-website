/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #ffffff)",
        foreground: "var(--foreground, #0a0a0a)",
        'sky': {
          900: '#0c4a6e',
          200: '#bae6fd',
        },
        'blue': {
          200: 'rgb(191 219 254)',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
  },
};
