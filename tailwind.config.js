/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1366px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    colors: {
      'primary': '#749578',
      'primary-light': '#ecf2e7',
      'primary-dark': '#650104',
      'secondary': '#7327B0',
      'secondary-light': '#FFD270',
      'yellow': '#ffc82c',
      'black': {
        '100': '#000000',
        '200': '#191a1a',
        '300': '#161616',
        '400': '#2b2a2a',
        '500': '#616372',
        '600': '#797b88',
        '700': '#92949e',
      },
      'white': {
        '100': '#d5e2ca',
        '200': '#dae5d0',
        '300': '#dee8d6',
        '400': '#e3ecdb',
        '500': '#e8efe1',
        '600': '#ecf2e7',
        '700': '#f6fff7',
        DEFAULT: '#ffffff'
      },
    },
    fontFamily: {
      // sans: ['sansFont', 'sans-serif'],
      // serif: ['var(--poiret_one)'],
      sans: 'var(--font-montserrat)',
      // header: ['var(--poiret_one)'],
    },
    extend: {
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'scale(1))',
            opacity: 0.5,
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(0.6))',
            opacity: 0.5,
          },
        },
        // ping : {
        //   75%, 100% {
        //     transform: scale(2);
        //     opacity: 0;
        //   }
        // }
      },
      animation: {
        wiggle: 'wiggle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
}