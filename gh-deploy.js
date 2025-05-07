// Script tự động triển khai lên GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Thiết lập biến môi trường cho quá trình build
process.env.GITHUB_PAGES = 'true';

// Hiển thị thông báo bắt đầu
console.log('\x1b[36m%s\x1b[0m', '🚀 Bắt đầu triển khai lên GitHub Pages...');

// 1. Build ứng dụng với biến môi trường GITHUB_PAGES=true
console.log('\x1b[33m%s\x1b[0m', '📦 Building trang web...');
execSync('next build --no-lint', { stdio: 'inherit' });

// 2. Đảm bảo file .nojekyll tồn tại trong thư mục out
const nojekyllPath = path.join(__dirname, 'out', '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  console.log('\x1b[33m%s\x1b[0m', '📄 Tạo file .nojekyll...');
  fs.writeFileSync(nojekyllPath, '');
}

// 3. Kiểm tra và tạo file 404.html nếu chưa tồn tại
const notFoundPath = path.join(__dirname, 'out', '404.html');
if (!fs.existsSync(notFoundPath)) {
  console.log('\x1b[33m%s\x1b[0m', '📄 Tạo file 404.html...');
  const indexPath = path.join(__dirname, 'out', 'index.html');
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    fs.writeFileSync(notFoundPath, indexContent);
  }
}

// 4. Deploy lên GitHub Pages
console.log('\x1b[33m%s\x1b[0m', '🚀 Đẩy lên GitHub Pages...');
execSync('gh-pages -d out', { stdio: 'inherit' });

console.log('\x1b[32m%s\x1b[0m', '✅ Triển khai thành công!');
console.log('\x1b[36m%s\x1b[0m', '🌐 Trang web của bạn sẽ có sẵn tại: https://dungnc7.github.io/wedding/');