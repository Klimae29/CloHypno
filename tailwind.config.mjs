/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f0',
          100: '#dce7dc',
          200: '#b9d0b9',
          300: '#94b894',
          400: '#6fa06f',
          500: '#6B8E6B',
          600: '#5a7a5a',
          700: '#4a664a',
          800: '#3a523a',
          900: '#2a3e2a',
        },
        secondary: {
          50: '#f5f8f5',
          100: '#e8f0e8',
          200: '#d1e1d1',
          300: '#A8C4A8',
          400: '#8fb58f',
          500: '#76a676',
          600: '#5d975d',
          700: '#44884a',
          800: '#2b792b',
          900: '#126a12',
        },
        accent: {
          50: '#f4f7f4',
          100: '#e6efe6',
          200: '#cce0cc',
          300: '#b3d0b3',
          400: '#99c199',
          500: '#8FBC8F',
          600: '#7aad7a',
          700: '#659e65',
          800: '#508f50',
          900: '#3b803b',
        },
        neutral: {
          50: '#fafafa',
          100: '#F5F5F0',
          200: '#e8e8e3',
          300: '#dcdcd6',
          400: '#cfcfc9',
          500: '#c2c2bc',
          600: '#a8a8a2',
          700: '#8e8e88',
          800: '#74746e',
          900: '#5a5a54',
        },
        text: {
          DEFAULT: '#2C3E2C',
          light: '#5A6B5A',
        }
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
