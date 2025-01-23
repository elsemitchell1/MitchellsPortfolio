/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)', boxShadow: '0 0 20px 10px rgba(255, 165, 0, 0.6)' },
          '50%': { transform: 'rotate(180deg)', boxShadow: '0 0 20px 10px rgba(255, 165, 0, 0.8)' },
          '100%': { transform: 'rotate(360deg)', boxShadow: '0 0 20px 10px rgba(255, 165, 0, 0.6)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 1s linear infinite',
      },
    },
  },
  plugins: [],
}

