/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),

  // Hide the dev-tools badge — it parks itself over the footer mark
  devIndicators: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    /* No minimumCacheTTL: on Vercel it only governs remote images. Local
       (public/) images are always sent to browsers with max-age=0,
       must-revalidate, and the CDN keeps the transforms for 31 days
       regardless — verified against the live headers, 2026-09-14. */
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;
