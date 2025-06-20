/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true, // use false for temporary redirect
      },
    ];
  },
  images: {
    domains: ["picsum.photos"],
  },
  // output: 'export',
};

module.exports = nextConfig;
