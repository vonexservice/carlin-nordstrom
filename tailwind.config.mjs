/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          900: 'rgb(var(--color-ink-900) / <alpha-value>)',
          800: 'rgb(var(--color-ink-800) / <alpha-value>)',
          700: 'rgb(var(--color-ink-700) / <alpha-value>)',
          600: 'rgb(var(--color-ink-600) / <alpha-value>)',
          500: 'rgb(var(--color-ink-500) / <alpha-value>)',
          400: 'rgb(var(--color-ink-400) / <alpha-value>)',
          300: 'rgb(var(--color-ink-300) / <alpha-value>)',
          200: 'rgb(var(--color-ink-200) / <alpha-value>)',
          100: 'rgb(var(--color-ink-100) / <alpha-value>)',
          50: 'rgb(var(--color-ink-50) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--color-cream) / <alpha-value>)',
          50: 'rgb(var(--color-cream-50) / <alpha-value>)',
          100: 'rgb(var(--color-cream-100) / <alpha-value>)',
          200: 'rgb(var(--color-cream-200) / <alpha-value>)',
        },
        silver: {
          DEFAULT: 'rgb(var(--color-silver) / <alpha-value>)',
          50: 'rgb(var(--color-silver-50) / <alpha-value>)',
          100: 'rgb(var(--color-silver-100) / <alpha-value>)',
          200: 'rgb(var(--color-silver-200) / <alpha-value>)',
          300: 'rgb(var(--color-silver-300) / <alpha-value>)',
          400: 'rgb(var(--color-silver-400) / <alpha-value>)',
          500: 'rgb(var(--color-silver-500) / <alpha-value>)',
        },
        ember: {
          DEFAULT: 'rgb(var(--color-ember) / <alpha-value>)',
          50: 'rgb(var(--color-ember-50) / <alpha-value>)',
          100: 'rgb(var(--color-ember-100) / <alpha-value>)',
          200: 'rgb(var(--color-ember-200) / <alpha-value>)',
          300: 'rgb(var(--color-ember-300) / <alpha-value>)',
          400: 'rgb(var(--color-ember-400) / <alpha-value>)',
          500: 'rgb(var(--color-ember-500) / <alpha-value>)',
          600: 'rgb(var(--color-ember-600) / <alpha-value>)',
          700: 'rgb(var(--color-ember-700) / <alpha-value>)',
          800: 'rgb(var(--color-ember-800) / <alpha-value>)',
          900: 'rgb(var(--color-ember-900) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        body: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose: '68ch',
        content: '80rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
