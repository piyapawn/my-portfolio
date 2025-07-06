/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
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

module.exports = nextConfig;