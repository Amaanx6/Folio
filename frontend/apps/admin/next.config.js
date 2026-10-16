/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@repo/ui',
    '@repo/utils',
    '@repo/types',
    '@repo/api-client',
  ],
};

module.exports = nextConfig;
