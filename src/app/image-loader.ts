import { ImageLoaderProps } from 'next/image';

export default function customLoader({ src, width, quality }: ImageLoaderProps): string {
  // width và quality không sử dụng nhưng cần khai báo để match interface ImageLoaderProps
  // Nếu src đã là URL đầy đủ, trả về nguyên vẹn
  if (src.startsWith('http')) {
    return src;
  }
  
  // Loại bỏ dấu './' hoặc '/' ở đầu nếu có
  const cleanedSrc = src.replace(/^\.?\/?/, '');
  
  // Lấy đường dẫn cơ sở từ biến môi trường
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Đảm bảo đường dẫn cơ sở kết thúc với dấu '/' nếu nó tồn tại
  const normalizedBasePath = basePath ? 
    (basePath.endsWith('/') ? basePath : `${basePath}/`) : 
    '';
  
  return `${normalizedBasePath}${cleanedSrc}`;
}