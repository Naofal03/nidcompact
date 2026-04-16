import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external images from common product/stock photo sources
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: '**.cloudfront.net' },
    ],
  },
  // Transpile packages that need it
  transpilePackages: [],
};

export default nextConfig;
