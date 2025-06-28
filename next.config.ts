import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/vibe-coding-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vibe-coding-portfolio/' : '',
};

export default nextConfig;
