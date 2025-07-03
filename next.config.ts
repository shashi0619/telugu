/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warnings will not fail the build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
