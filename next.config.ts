import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/vibe-coding-portfolio',
  assetPrefix: '/vibe-coding-portfolio/',
};

export default nextConfig;
