/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-alice)',
        alt: 'var(--font-roxborough)',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        transparent: 'transparent',
        current: 'currentColor',
        status: {
          success: '#119c70',
          warning: '#F2C94C',
          error: '#F17B7B',
          info: '#2D9CDB',
        },
        gray: {
          secondary: '#E4E7EB',
          50: '#f7f7f7',
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#c2c2c2',
          400: '#959595',
          500: '#686868',
          600: '#5e5e5e',
          700: '#4f4f4f',
          800: '#404040',
          900: '#343434',
        },
        brand: {
          secondary: '#4F796C',
          50: '#ABCED8',
          100: '#ABEDD8',
          200: '#92DDC9',
          300: '#78C8B9',
          400: '#5EBBA9',
          500: '#45AA99',
          600: '#399184',
          700: '#2E796F',
          800: '#226159',
          900: '#174844',
        },
        gradient: {
          brand: 'linear-gradient(180deg, #4F796C 0%, #45AA99 100%) ',
          light: 'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%)',
          dark: 'linear-gradient(180deg, #404040 0%, #343434 100%)',
          error: 'linear-gradient(180deg, #f17b7b 0%, #9f2828 100%)',
        },
      },
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'zc-base-pattern': "url('../assets/patterns/pattern-bg.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
