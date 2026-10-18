/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070D18',
          900: '#0B1528',
          850: '#0F1E36',
          800: '#142747',
          700: '#1D355E',
          600: '#2A497F',
        },
        brand: {
          blue: '#1E40AF',
          primary: '#1D4ED8',
          accent: '#2563EB',
          light: '#EFF6FF',
          sky: '#0284C7',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 21, 40, 0.05), 0 1px 2px 0 rgba(11, 21, 40, 0.03)',
        'card': '0 4px 20px -2px rgba(11, 21, 40, 0.06), 0 2px 6px -1px rgba(11, 21, 40, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(11, 21, 40, 0.12), 0 4px 10px -2px rgba(11, 21, 40, 0.06)',
        'dropdown': '0 10px 40px -6px rgba(11, 21, 40, 0.14)',
      }
    },
  },
  plugins: [],
}
