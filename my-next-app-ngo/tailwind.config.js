/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#f9fafb', // light background
        'background-dark': '#1f2937',  // dark background
        'primary': '#4f46e5',          // primary accent color
      },
      fontSize: {
        'size-5': '1.25rem', // example for logo/footer
        'size-7': '1.75rem', // example for header logo
        'size-10': '2.5rem', // example for avatar
      },
    },
  },
  plugins: [],
}