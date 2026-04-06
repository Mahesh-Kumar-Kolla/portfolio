import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests from network devices for development
  allowedDevOrigins: ["192.168.29.235"],
  
  // GitHub Pages static export configuration
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
