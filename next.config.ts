// import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
