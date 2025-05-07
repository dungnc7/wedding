/** @type {import('next').NextConfig} */

// Kiểm tra nếu đang triển khai trên GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = '/wedding';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/app/image-loader.ts',
  },
  basePath: isGithubPages ? repo : '',
  assetPrefix: isGithubPages ? repo : '',
  trailingSlash: true,
  
  // Tắt các tính năng không cần thiết có thể gây lỗi
  productionBrowserSourceMaps: false,
  
  // Thêm một số biến môi trường
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repo : '',
  },
};

export default nextConfig;
