/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
    
        hostname: 'utfs.io',
      },
    ],
  },
};

export default nextConfig;
