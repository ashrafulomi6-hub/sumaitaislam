import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#666666',
        accent: '#2563EB',
        background: '#FFFFFF',
        border: '#EAEAEA',
        dark: {
          background: '#0A0A0A',
          surface: '#111111',
          border: '#222222',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-jakarta)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
};

export default config;
