/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Explicitly set the workspace root to silence the warning
  outputFileTracingRoot: path.join(__dirname),

  // Configure webpack to support path aliases for JavaScript files
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
};

module.exports = nextConfig;

