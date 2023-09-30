/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
      fontFamily: {
        'red-hat-display': ['Red Hat Display'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      backgroundImage: {
        'mobile-background':
          "url('/dist/images/pattern-background-mobile.svg')",
        'desktop-background':
          "url('/dist/images/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
}
