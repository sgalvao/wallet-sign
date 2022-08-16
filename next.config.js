/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["*"],
  },
};

module.exports = nextConfig;
