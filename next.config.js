/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
