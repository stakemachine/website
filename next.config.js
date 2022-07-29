/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
