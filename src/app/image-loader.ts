import { ImageLoaderProps } from 'next/image';

export default function customLoader({ src, width, quality }: ImageLoaderProps): string {
  // Nếu src đã là URL đầy đủ, trả về nguyên vẹn
  if (src.startsWith('http')) {
    return src;
  }
  
  // Nếu trong môi trường production (GitHub Pages), sử dụng đường dẫn tương đối đúng
  // với basePath '/wedding'
  if (process.env.NODE_ENV === 'production') {
    // Đảm bảo không có '/' ở đầu để tránh lỗi đường dẫn
    if (src.startsWith('/')) {
      src = src.slice(1);
    }
    
    // Không thêm '/wedding' nếu src đã bắt đầu với './images/' hoặc 'images/'
    if (src.startsWith('./') || !src.startsWith('/')) {
      return src;
    }
    
    return `/wedding${src}`;
  }
  
  // Trong môi trường development, giữ nguyên hành vi
  return src.startsWith('/') ? src : `/${src}`;
}