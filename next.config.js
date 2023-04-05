// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  eslint: {
    dirs: ['src', 'e2e'],
  },
  images: {
    domains: ['bit.ly', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
