/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
    unoptimized: true,
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});
module.exports = withBundleAnalyzer(nextConfig);
