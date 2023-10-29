/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    config.watchOptions = {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000,
    };
    return config;
  },
};

module.exports = nextConfig;
