module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        }
      },
      fontFamily: {
        mojang: ['MojangABC'],
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px #0f172a, -8px -8px 16px #1e293b',
        'inner-xl': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderWidth: {
        '3': '3px'
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
