import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freebw.com',
      },
    ],
  },
};

export default nextConfig;
