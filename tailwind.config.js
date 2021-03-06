const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: "'Crimson Text', serif",
        'sans-serif': "'Open sans', Arial, sans-serif",
        // headline3: "'Cormorant Upright', serif",
        // headline3: "'PT Serif', serif",
        serif: "'PT Serif', serif"
      },
      /* fontSize: {
        'xs': '.75rem',
        'sm': '1rem',
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },  */
      colors: {
        gray: {
          '900': '#232323',
          '600': "#555555",
          '300': "#dcdcdc",
          '100': "#F7F7F7",
        },
        pink: {
          '900': '#512B38',
          '100': '#F6F4F5',
        }
      },
      outline: {
        black: '2px solid #232323',
      }
    },
  },
  variants: {},
  plugins: [
    plugin (function({ addComponents }) {
      const apply = (rule) => ({
        [`@apply ${rule}`]: {}
      })

      addComponents({
        '.fullscreen': {
          // '@apply fixed h-screen w-screen': {},
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'auto',
        },
        '.scene': {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        '.ellipsis': apply('whitespace-nowrap overflow-ellipsis overflow-hidden'),
        '.access-control': {
          '-webkit-tap-highlight-color': 'transparent',
          '&:active': {
            animation: '0.2s bounce ease'
          }
        },
        '.overlapse-bottom-form': {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          'box-shadow': '0 4px 25px 10px white',
          ...apply('bg-white py-4 px-6')
        }
      })
    }),
  ],
}
