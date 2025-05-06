/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    disableStaticImages: false,
    dangerouslyAllowSVG: true,
    remotePatterns: [],
    formats: ['image/webp'],
  },
  experimental: {
    useDeploymentId: true,
    useDeploymentIdServerActions: true,
  },
};

export default nextConfig;
