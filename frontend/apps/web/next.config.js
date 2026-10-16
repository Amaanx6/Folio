/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@repo/ui',
    '@repo/utils',
    '@repo/validators',
    '@repo/api-client',
    '@repo/types',
  ],
};

module.exports = nextConfig;
