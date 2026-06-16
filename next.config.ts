import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 120, 256],
  },

  // Enable compression
  compress: true,

  // Powered-by header removal for security
  poweredByHeader: false,

  // Strict mode for development
  reactStrictMode: true,
};

export default nextConfig;
