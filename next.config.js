const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    transpilePackages: ['next-intl', '@pqina/pintura', '@pqina/react-pintura'],
    reactStrictMode: true,
    poweredByHeader: false,
    devIndicators: {
      buildActivity: false,
    },
    images: {
      domains: ['s3.turistikrota.com', 'avatar.turistikrota.com'],
    },
  }
  
  module.exports = withNextIntl(nextConfig)