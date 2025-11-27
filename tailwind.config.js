/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'premium-red': '#D90429',
        'premium-black': '#0B0B0B',
        'premium-dark': '#1A1A1A',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'liquid-shine': 'liquid-shine 3s ease-in-out infinite',
        'energy-pulse': 'energy-pulse 2s ease-in-out infinite',
        'slide-fade': 'slide-fade 0.6s ease-out',
        'depth-zoom': 'depth-zoom 0.8s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(217, 4, 41, 0.3), 0 0 40px rgba(217, 4, 41, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(217, 4, 41, 0.6), 0 0 60px rgba(217, 4, 41, 0.4)',
          },
        },
        'liquid-shine': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'energy-pulse': {
          '0%, 100%': { 
            opacity: 0.6,
            transform: 'scaleX(1)',
          },
          '50%': { 
            opacity: 1,
            transform: 'scaleX(1.05)',
          },
        },
        'slide-fade': {
          '0%': { 
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'depth-zoom': {
          '0%': { 
            opacity: 0,
            transform: 'scale(0.9) translateZ(-50px)',
          },
          '100%': { 
            opacity: 1,
            transform: 'scale(1) translateZ(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

