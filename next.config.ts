import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Avoid OneDrive file-lock issues with persistent webpack cache on Windows.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
