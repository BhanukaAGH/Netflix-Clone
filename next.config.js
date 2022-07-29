/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy'],
  },
}

const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
])

module.exports = withTM(nextConfig)
