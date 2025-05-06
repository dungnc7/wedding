import { ImageLoaderProps } from 'next/image';

export default function customLoader({ src, width, quality }: ImageLoaderProps): string {
  // Nếu src đã là URL đầy đủ, trả về nguyên vẹn
  if (src.startsWith('http')) {
    return src;
  }
  
  // Nếu src là đường dẫn tương đối, đảm bảo nó bắt đầu bằng '/'
  if (!src.startsWith('/')) {
    src = `/${src}`;
  }
  
  // Trả về đường dẫn tương đối
  return src;
}