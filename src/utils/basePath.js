// Tiện ích để quản lý đường dẫn cơ sở trong toàn bộ ứng dụng
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Thêm đường dẫn cơ sở vào đường dẫn tương đối
export function withBasePath(path) {
  // Nếu path là URL đầy đủ, không thêm basePath
  if (path?.startsWith('http')) {
    return path;
  }

  // Loại bỏ dấu '/' đầu tiên nếu có
  const cleanPath = path?.replace(/^\//, '') || '';
  
  // Nếu basePath không tồn tại, trả về đường dẫn với dấu '/' ở đầu
  if (!basePath) {
    return `/${cleanPath}`;
  }
  
  // Kết hợp basePath với đường dẫn tương đối
  return `${basePath}/${cleanPath}`;
}

export default basePath;