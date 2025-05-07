/** @type {import('next').NextConfig} */

// Kiểm tra nếu đang triển khai trên GitHub Pages hoặc Vercel
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const isVercel = process.env.VERCEL === 'true' || process.env.VERCEL === '1';
const repo = '/wedding';

const nextConfig = {
  reactStrictMode: true,
  // Chỉ export static khi build cho GitHub Pages, không cần cho Vercel
  output: isVercel ? undefined : 'export',
  distDir: isVercel ? '.next' : 'out',
  images: {
    unoptimized: !isVercel, // Vercel có thể tối ưu hình ảnh
    loader: isVercel ? 'default' : 'custom',
    loaderFile: !isVercel ? './src/app/image-loader.ts' : undefined,
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
