import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep dev build output in node_modules cache to reduce OneDrive file-lock issues on Windows.
  ...(process.env.NODE_ENV === "development"
    ? { distDir: "node_modules/.cache/moderor-next" }
    : {}),
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/suites/grc%20suite",
        destination: "/suites/grc-suite",
        permanent: true,
      },
      {
        source: "/suites/grc suite",
        destination: "/suites/grc-suite",
        permanent: true,
      },
      {
        source: "/suites/grc_suite",
        destination: "/suites/grc-suite",
        permanent: true,
      },
    ];
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
