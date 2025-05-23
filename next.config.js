/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Turbopack is enabled by default in dev script
  }
};

module.exports = nextConfig;