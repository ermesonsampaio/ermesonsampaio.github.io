module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#8ab5b2',
          500: '#376f6a',
          600: '#072c2e',
        },
        darker: {
          400: '#D9D9D9',
          700: '#262223',
        },
        borderRadius: {
          md: '4px',
        },
      },
    },
    fontFamily: {
      sans: ['Space Grotesk']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
