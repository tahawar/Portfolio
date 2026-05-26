import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0b',
          elevated: '#111113',
          card: '#161618',
          hover: '#1c1c1f',
        },
        ink: {
          DEFAULT: '#fafafa',
          muted: '#a1a1aa',
          dim: '#71717a',
          faint: '#52525b',
        },
        line: {
          DEFAULT: '#27272a',
          subtle: '#1f1f23',
          bright: '#3f3f46',
        },
        accent: {
          DEFAULT: '#3b82f6',
          glow: '#60a5fa',
          deep: '#1d4ed8',
          dim: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'blink': 'blink 1s steps(2) infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'flow': 'flow 3s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        flow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
