/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    fontFamily: {
      libre: 'var(--font-libre)'
    },
    extend: {
      colors: {
        'vine-lighter': 'var(--vine-lighter)',
        'foliage': 'var(--foliage)',
        'petal': 'var(--petal)',
        'sage': 'var(--sage)',
        'stone': 'var(--stone)',
        'darker-foliage': 'var(--darker-foliage)',
        'light-foliage': 'var(--light-foliage)',
        'body-text': 'var(--body-text)',
        'light-body-text': 'var(--light-body-text)',
        'divider-outline': 'var(--divider-outline)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.vine-lighter'),
            },
            h1: {
              fontSize: theme('fontSize.xl'),
              '@screen sm': {
                fontSize: theme('fontSize.2xl'),
              },
              '@screen md': {
                fontSize: theme('fontSize.3xl'),
              },
              '@screen lg': {
                fontSize: theme('fontSize.4xl'),
              },
              fontWeight: theme('fontWeight.semibold'),
            },
            h2: {
              fontSize: theme('fontSize.lg'),
              '@screen sm': {
                fontSize: theme('fontSize.xl'),
              },
              '@screen md': {
                fontSize: theme('fontSize.2xl'),
              },
              '@screen lg': {
                fontSize: theme('fontSize.3xl'),
              },
              fontWeight: theme('fontWeight.semibold'),
            },
            h3: {
              fontSize: theme('fontSize.base'),
              '@screen sm': {
                fontSize: theme('fontSize.xl'),
              },
              '@screen md': {
                fontSize: theme('fontSize.xl'),
              },
              '@screen lg': {
                fontSize: '26px', // Use custom value
              },
              fontWeight: theme('fontWeight.semibold'),
            },
            h4: {
              fontSize: theme('fontSize.base'),
              '@screen sm': {
                fontSize: theme('fontSize.lg'),
              },
              '@screen md': {
                fontSize: theme('fontSize.xl'),
              },
              '@screen lg': {
                fontSize: '22px', // Use custom value
              },
              fontWeight: theme('fontWeight.semibold'),
            },
            p: {
              fontSize: theme('fontSize.base'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
      }),
    }
  },
  plugins: [require('@tailwindcss/typography')],
}

