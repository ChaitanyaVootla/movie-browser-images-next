import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'd2qifmj8erqnak.cloudfront.net',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
