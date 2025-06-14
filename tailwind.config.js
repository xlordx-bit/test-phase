export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
}