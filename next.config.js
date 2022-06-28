/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.jsx', 'api.js'],
  eslint: {
    dirs: ['src','e2e'],
  },
  images:{
    domains:['bit.ly']
  }
}

module.exports = nextConfig
