/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
  extend: {
    colors: {
      purple: {
        600: '#7c3aed',
        700: '#6d28d9',
      }
    }
  },
};
export const plugins = [];