const withPWA = require('next-pwa')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
})
