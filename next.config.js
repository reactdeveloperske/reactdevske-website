// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bit.ly',
        pathname: '/:path*',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/:path*',
      },
    ],
  },
};

module.exports = nextConfig;
