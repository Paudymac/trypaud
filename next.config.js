/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Explicitly set the workspace root to silence the warning
  outputFileTracingRoot: path.join(__dirname),

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  productionBrowserSourceMaps: false,

  // Configure webpack to support path aliases for JavaScript files
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    // Bundle analyzer (only in production builds when ANALYZE is set)
    if (!dev && !isServer && process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze.html',
          openAnalyzer: false,
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
