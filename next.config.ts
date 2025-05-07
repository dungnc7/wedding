/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    disableStaticImages: false,
    dangerouslyAllowSVG: true,
    remotePatterns: [],
    formats: ['image/webp'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/wedding' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wedding/' : '',
};

export default nextConfig;
