/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable build to work on Netlify and Vercel
  output: 'standalone',

  // Allow external images from your S3 bucket
  images: {
    domains: ['shashimern.s3.eu-north-1.amazonaws.com'],
  },

  // Allow builds to pass even with ESLint warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
