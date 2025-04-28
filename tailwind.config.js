/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeyellow: "#f5e60d",
        themepurple: "#502ec3",
        themelight: "#f0f4ff",
        themedark: "#1a1a2e",
      },
      screens: {
        'xs': '480px',
        // Standard breakpoints are included by default: 
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'custom': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 30px -3px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
