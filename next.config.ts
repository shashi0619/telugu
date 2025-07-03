/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // enables dynamic server output (SSR/ISR)

  images: {
    domains: ['shashimern.s3.eu-north-1.amazonaws.com'],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
