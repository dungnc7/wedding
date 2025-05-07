const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Các thiết lập
const BASE_PATH = '/wedding';

// Hiển thị thông báo
console.log('\x1b[36m%s\x1b[0m', '🚀 Bắt đầu quy trình tạo thiệp cưới tĩnh...');

// 1. Build dự án với Next.js để tạo các tài nguyên cần thiết
console.log('\x1b[33m%s\x1b[0m', '1️⃣ Building trang web với Next.js...');
try {
  // Thiết lập biến môi trường
  process.env.NEXT_PUBLIC_BASE_PATH = BASE_PATH;
  
  // Chạy lệnh build
  execSync('next build --no-lint', { stdio: 'inherit' });
  console.log('\x1b[32m%s\x1b[0m', '✅ Build thành công!');
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Lỗi trong quá trình build:', error);
  process.exit(1);
}

// 2. Tạo thư mục out nếu chưa tồn tại
const outDir = path.join(__dirname, 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 3. Tạo file .nojekyll trong thư mục out
console.log('\x1b[33m%s\x1b[0m', '2️⃣ Tạo file .nojekyll...');
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// 4. Đảm bảo file 404.html tồn tại và đúng cấu trúc
console.log('\x1b[33m%s\x1b[0m', '3️⃣ Tạo file 404.html...');
const html404 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tâm & Yến - Wedding</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    // Redirect to the home page
    window.location.href = "${BASE_PATH}/";
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #e1f5e6;
      color: #4f8e62;
    }
    h1 { margin-bottom: 10px; }
    p { margin-top: 10px; }
    a { color: #4f8e62; text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Đang chuyển hướng...</h1>
  <p>Nếu bạn không được chuyển hướng, <a href="${BASE_PATH}/">click vào đây</a>.</p>
</body>
</html>
`;
fs.writeFileSync(path.join(outDir, '404.html'), html404);

// 5. Xóa triệt để file CNAME
console.log('\x1b[33m%s\x1b[0m', '4️⃣ Xóa triệt để file CNAME...');

// 5.1. Xóa file CNAME trong thư mục out
const cnamePath = path.join(outDir, 'CNAME');
if (fs.existsSync(cnamePath)) {
  console.log('\x1b[33m%s\x1b[0m', '   Xóa file CNAME hiện có...');
  fs.unlinkSync(cnamePath);
}

// 5.2. Tạo file NO_CNAME.txt để nhấn mạnh không dùng custom domain
fs.writeFileSync(path.join(outDir, 'NO_CNAME.txt'), 'This file ensures no CNAME is used.');

// 6. Tạo trang thiệp cưới tĩnh đầy đủ
console.log('\x1b[33m%s\x1b[0m', '5️⃣ Tạo file index.html với đầy đủ nội dung thiệp cưới...');
const staticWeddingPage = `
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Tâm & Yến - Thiệp Cưới</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Thiệp mời đám cưới Tâm & Yến">
  <meta name="theme-color" content="#4f8e62">
  <link rel="icon" href="${BASE_PATH}/favicon.ico" type="image/x-icon">
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500;600&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
  
  <style>
    :root {
      --primary: #4f8e62;
      --primary-light: #e1f5e6;
      --primary-dark: #3a6b49;
      --accent: #ff9d9d;
      --text: #333333;
      --light: #ffffff;
      --gray: #f8f8f8;
      --dark-gray: #666666;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }
    
    a {
      color: var(--primary);
      text-decoration: none;
      transition: all 0.3s;
    }
    
    a:hover {
      color: var(--primary-dark);
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .section {
      padding: 100px 0;
    }
    
    .section-title {
      font-family: 'Great Vibes', cursive;
      font-size: 48px;
      color: var(--primary);
      text-align: center;
      margin-bottom: 50px;
    }

    .section-subtitle {
      font-size: 18px;
      color: var(--dark-gray);
      text-align: center;
      margin-bottom: 40px;
    }

    /* Header */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 100;
      transition: all 0.3s;
      padding: 15px 0;
    }
    
    header.scrolled {
      padding: 10px 0;
    }
    
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
      font-family: 'Great Vibes', cursive;
      font-size: 28px;
      color: var(--primary);
    }
    
    .nav-menu {
      display: flex;
      list-style: none;
    }
    
    .nav-link {
      margin-left: 30px;
      font-size: 16px;
      font-weight: 500;
      position: relative;
    }
    
    .nav-link:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary);
      transition: all 0.3s;
    }
    
    .nav-link:hover:after {
      width: 100%;
    }
    
    .menu-toggle {
      display: none;
      cursor: pointer;
      font-size: 24px;
    }
    
    /* Hero Section */
    #hero {
      height: 100vh;
      background: linear-gradient(to bottom, var(--primary-light), white);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      z-index: 1;
      padding: 20px;
    }
    
    .hero-intro {
      font-size: 22px;
      margin-bottom: 15px;
    }
    
    .hero-names {
      font-family: 'Great Vibes', cursive;
      font-size: 80px;
      color: var(--primary);
      margin-bottom: 20px;
    }
    
    .hero-invite {
      font-size: 24px;
      margin-bottom: 30px;
    }
    
    .hero-date {
      font-size: 28px;
      margin-top: 30px;
    }
    
    .hero-lunar {
      color: var(--dark-gray);
      margin-top: 10px;
    }
    
    .hero-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 30px;
      padding: 12px 32px;
      background-color: var(--primary);
      color: white;
      border-radius: 50px;
      font-weight: 500;
      text-decoration: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }
    
    .hero-btn:hover {
      background-color: var(--primary-dark);
      transform: translateY(-3px);
    }
    
    .hero-btn-icon {
      transition: transform 0.3s;
    }
    
    .hero-btn:hover .hero-btn-icon {
      transform: translateX(4px);
    }
    
    .hero-decoration {
      position: absolute;
      opacity: 0.3;
    }
    
    .hero-decoration-1 {
      bottom: -8%;
      left: -5%;
      width: 25%;
    }
    
    .hero-decoration-2 {
      top: -5%;
      right: -5%;
      width: 25%;
    }

    /* Couple Section */
    #couple {
      background-color: white;
    }
    
    .couple-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }
    
    .person {
      text-align: center;
    }
    
    .person-image-container {
      width: 250px;
      height: 250px;
      margin: 0 auto 30px;
      border-radius: 50%;
      border: 4px solid var(--primary-light);
      overflow: hidden;
    }
    
    .person-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .person-name {
      font-family: 'Dancing Script', cursive;
      font-size: 32px;
      color: var(--primary);
      margin-bottom: 10px;
    }
    
    .person-role {
      margin-bottom: 20px;
    }
    
    .person-parents {
      margin-bottom: 10px;
    }
    
    .person-address {
      color: var(--dark-gray);
    }
    
    /* Events Section */
    #events {
      background-color: var(--gray);
    }
    
    .event-card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      padding: 30px;
      margin-bottom: 30px;
    }
    
    .event-icon {
      width: 80px;
      height: 80px;
      background-color: var(--primary-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      font-size: 32px;
      color: var(--primary);
    }
    
    .event-title {
      font-size: 24px;
      text-align: center;
      margin-bottom: 10px;
    }
    
    .event-details {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .event-datetime {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 10px;
    }
    
    .event-location {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    /* Gallery Section */
    #gallery {
      background-color: white;
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    
    .gallery-item {
      border-radius: 10px;
      overflow: hidden;
      height: 250px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
    
    .gallery-item:hover .gallery-image {
      transform: scale(1.05);
    }
    
    .show-more-btn {
      display: block;
      width: max-content;
      margin: 40px auto 0;
      padding: 12px 30px;
      background-image: linear-gradient(to right, #ff9d9d, #ff7878);
      color: white;
      border-radius: 50px;
      font-weight: 500;
      box-shadow: 0 5px 15px rgba(255, 157, 157, 0.3);
      transition: all 0.3s;
    }
    
    .show-more-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 157, 157, 0.4);
      color: white;
    }
    
    /* Countdown Section */
    #countdown {
      background-image: linear-gradient(rgba(79, 142, 98, 0.8), rgba(79, 142, 98, 0.8)), url('${BASE_PATH}/images/groom-bride.png');
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
    }
    
    .countdown-title {
      color: white;
    }
    
    .countdown-container {
      display: flex;
      justify-content: center;
      gap: 30px;
    }
    
    .countdown-box {
      width: 120px;
      height: 120px;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      backdrop-filter: blur(10px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .countdown-number {
      font-size: 48px;
      font-weight: 600;
      line-height: 1;
    }
    
    .countdown-label {
      margin-top: 5px;
      font-size: 14px;
      text-transform: uppercase;
    }
    
    /* Footer */
    footer {
      padding: 50px 0;
      background-color: var(--primary-dark);
      color: white;
      text-align: center;
    }
    
    .footer-names {
      font-family: 'Great Vibes', cursive;
      font-size: 36px;
      margin-bottom: 15px;
    }
    
    .footer-text {
      margin-bottom: 30px;
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: all 0.3s;
    }
    
    .social-link:hover {
      background-color: white;
      color: var(--primary-dark);
    }
    
    .copyright {
      opacity: 0.7;
      font-size: 14px;
    }

    /* Hearts animation */
    .hearts-container {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }
    
    .heart {
      position: absolute;
      width: 30px;
      height: 30px;
      opacity: 0;
      background-image: url('${BASE_PATH}/images/heart.svg');
      background-size: contain;
      background-repeat: no-repeat;
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0% {
        transform: translateY(100vh) scale(0.5);
        opacity: 0;
      }
      10% {
        opacity: 0.8;
      }
      90% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(-100px) scale(1);
        opacity: 0;
      }
    }

    /* Responsive Styles */
    @media (max-width: 992px) {
      .countdown-container {
        gap: 20px;
      }
      
      .countdown-box {
        width: 100px;
        height: 100px;
      }
      
      .countdown-number {
        font-size: 36px;
      }
    }
    
    @media (max-width: 768px) {
      .section {
        padding: 70px 0;
      }
      
      .section-title {
        font-size: 36px;
        margin-bottom: 30px;
      }
      
      .menu-toggle {
        display: block;
      }
      
      .nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        background-color: white;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 30px 0;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-200%);
        transition: transform 0.3s;
        z-index: 99;
      }
      
      .nav-menu.active {
        transform: translateY(0);
      }
      
      .nav-link {
        margin-left: 0;
      }
      
      .hero-names {
        font-size: 50px;
      }
      
      .hero-intro, .hero-invite {
        font-size: 18px;
      }
      
      .hero-date {
        font-size: 24px;
      }
      
      .couple-container {
        grid-template-columns: 1fr;
        gap: 50px;
      }
      
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .countdown-container {
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 15px;
      }
      
      .countdown-box {
        width: 80px;
        height: 80px;
      }
      
      .countdown-number {
        font-size: 28px;
      }
    }
    
    @media (max-width: 480px) {
      .hero-btn {
        padding: 10px 20px;
      }
      
      .gallery-grid {
        grid-template-columns: 1fr;
      }
      
      .countdown-box {
        width: 70px;
        height: 70px;
      }
      
      .countdown-number {
        font-size: 24px;
      }
      
      .countdown-label {
        font-size: 12px;
      }
    }
  </style>
</head>

<body>
  <!-- Header -->
  <header id="header">
    <div class="container header-container">
      <a href="#" class="logo">T & Y</a>
      <nav>
        <ul class="nav-menu" id="navMenu">
          <li><a href="#hero" class="nav-link">Trang chủ</a></li>
          <li><a href="#couple" class="nav-link">Cô dâu & Chú rể</a></li>
          <li><a href="#events" class="nav-link">Sự kiện</a></li>
          <li><a href="#gallery" class="nav-link">Hình ảnh</a></li>
        </ul>
        <div class="menu-toggle" id="menuToggle">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero">
    <div class="hearts-container" id="heartsContainer"></div>
    <div class="hero-content">
      <div data-aos="fade-down" data-aos-duration="1000">
        <p class="hero-intro">Trân trọng kính mời</p>
        <h1 class="hero-names">Tâm & Yến</h1>
        <p class="hero-invite">Wedding Invitation</p>
        <div style="width: 80px; height: 1px; background-color: var(--accent); margin: 0 auto;"></div>
        <h2 class="hero-date">Chủ Nhật, 25/05/2025</h2>
        <p class="hero-lunar">Nhằm ngày 28 tháng 04 năm Ất Tỵ</p>
        <a href="#couple" class="hero-btn">
          <span>Xem thêm</span>
          <i class="fas fa-arrow-right hero-btn-icon"></i>
        </a>
      </div>
    </div>
    <img src="${BASE_PATH}/images/flower-1.png" class="hero-decoration hero-decoration-1" alt="Flower decoration" data-aos="fade-right" data-aos-duration="1500">
    <img src="${BASE_PATH}/images/flower-2.png" class="hero-decoration hero-decoration-2" alt="Flower decoration" data-aos="fade-left" data-aos-duration="1500">
  </section>

  <!-- Couple Section -->
  <section id="couple" class="section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Cô dâu & Chú rể</h2>
      <div class="couple-container">
        <div class="person" data-aos="fade-right" data-aos-duration="1000">
          <div class="person-image-container">
            <img src="${BASE_PATH}/images/groom.jpg" alt="Chú rể" class="person-image">
          </div>
          <h3 class="person-name">Mã Hoàng Tâm</h3>
          <p class="person-role">Trưởng Nam</p>
          <p class="person-parents">Của Ông Bà:</p>
          <p class="person-parents"><strong>Mã Hi Tuấn & Lê Thị Thúy Linh</strong></p>
          <p class="person-address">Q. Bình Thạnh, TP. HCM</p>
        </div>
        <div class="person" data-aos="fade-left" data-aos-duration="1000">
          <div class="person-image-container">
            <img src="${BASE_PATH}/images/bride.jpg" alt="Cô dâu" class="person-image">
          </div>
          <h3 class="person-name">Lại Thị Hoàng Yến</h3>
          <p class="person-role">Trưởng Nữ</p>
          <p class="person-parents">Của Ông Bà:</p>
          <p class="person-parents"><strong>Lại Duy Huệ & Trần Thị Hòa</strong></p>
          <p class="person-address">Q. Bình Thạnh, TP. HCM</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Events Section -->
  <section id="events" class="section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Lịch trình sự kiện</h2>
      <p class="section-subtitle" data-aos="fade-up">Hân hạnh được đón tiếp quý khách</p>
      
      <div class="event-card" data-aos="fade-up" data-aos-duration="1000">
        <div class="event-icon">
          <i class="fas fa-glass-cheers"></i>
        </div>
        <h3 class="event-title">Tiệc cưới</h3>
        <div class="event-details">
          <div class="event-datetime">
            <i class="far fa-calendar-alt"></i>
            <span>Chủ nhật, ngày 25/05/2025 (28/04 Ất Tỵ)</span>
          </div>
          <div class="event-datetime">
            <i class="far fa-clock"></i>
            <span>Từ 17:30 - 21:00</span>
          </div>
          <div class="event-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>PARADISE WEDDING CENTER - Số 55 Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery" class="section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Khoảnh khắc</h2>
      <p class="section-subtitle" data-aos="fade-up">Những kỷ niệm đáng nhớ của chúng tôi</p>
      
      <div class="gallery-grid">
        <div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
          <img src="${BASE_PATH}/images/gallery/wedding1.jpg" alt="Hình cưới 1" class="gallery-image">
        </div>
        <div class="gallery-item" data-aos="fade-up" data-aos-delay="200">
          <img src="${BASE_PATH}/images/gallery/wedding2.jpg" alt="Hình cưới 2" class="gallery-image">
        </div>
        <div class="gallery-item" data-aos="fade-up" data-aos-delay="300">
          <img src="${BASE_PATH}/images/groom-bride.png" alt="Hình cưới 3" class="gallery-image">
        </div>
      </div>
    </div>
  </section>

  <!-- Countdown Section -->
  <section id="countdown" class="section">
    <div class="container">
      <h2 class="section-title countdown-title" data-aos="fade-up">Đếm ngược đến ngày vui</h2>
      
      <div class="countdown-container" data-aos="fade-up">
        <div class="countdown-box">
          <div class="countdown-number" id="days">00</div>
          <div class="countdown-label">Ngày</div>
        </div>
        <div class="countdown-box">
          <div class="countdown-number" id="hours">00</div>
          <div class="countdown-label">Giờ</div>
        </div>
        <div class="countdown-box">
          <div class="countdown-number" id="minutes">00</div>
          <div class="countdown-label">Phút</div>
        </div>
        <div class="countdown-box">
          <div class="countdown-number" id="seconds">00</div>
          <div class="countdown-label">Giây</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-names">Tâm & Yến</div>
      <p class="footer-text">Cảm ơn bạn đã ghé thăm trang web của chúng tôi</p>
      <div class="social-links">
        <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
      </div>
      <p class="copyright">&copy; 2025 Tâm & Yến Wedding. All rights reserved.</p>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script>
    // Initialize AOS
    document.addEventListener('DOMContentLoaded', function() {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out',
      });
      
      // Header scroll effect
      const header = document.getElementById('header');
      window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      
      // Mobile menu toggle
      const menuToggle = document.getElementById('menuToggle');
      const navMenu = document.getElementById('navMenu');
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') ? 
          '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      });
      
      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          navMenu.classList.remove('active');
          menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
      
      // Countdown
      const weddingDate = new Date('May 25, 2025 17:30:00').getTime();
      
      function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / (1000));
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
          clearInterval(countdownInterval);
          document.getElementById('days').innerHTML = '00';
          document.getElementById('hours').innerHTML = '00';
          document.getElementById('minutes').innerHTML = '00';
          document.getElementById('seconds').innerHTML = '00';
        }
      }
      
      updateCountdown();
      const countdownInterval = setInterval(updateCountdown, 1000);
      
      // Hearts animation
      const heartsContainer = document.getElementById('heartsContainer');
      
      function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position
        heart.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 3 + 4; // 4-7s
        heart.style.animationDuration = duration + 's';
        
        // Random size
        const size = Math.random() * 20 + 20; // 20-40px
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
          heart.remove();
        }, duration * 1000);
      }
      
      // Create hearts periodically
      setInterval(createHeart, 1000);
      
      // Create initial hearts
      for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 300);
      }
    });
  </script>
</body>
</html>
`;

// Ghi file index.html mới
fs.writeFileSync(path.join(outDir, 'index.html'), staticWeddingPage);

// 7. Deploy lên GitHub Pages với force push để xóa triệt để file CNAME
console.log('\x1b[33m%s\x1b[0m', '6️⃣ Triển khai lên GitHub Pages với force push...');

// 7.1 Thử dùng gh-pages với tùy chọn force
try {
  console.log('\x1b[33m%s\x1b[0m', '   Đang push với force để xóa CNAME...');
  execSync('npx gh-pages --dist out --no-history --dotfiles', { stdio: 'inherit' });
  console.log('\x1b[32m%s\x1b[0m', '✅ Deploy thành công!');
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Lỗi trong quá trình deploy:', error);
  process.exit(1);
}

console.log('\x1b[36m%s\x1b[0m', '🌟 Hoàn tất! Trang web của bạn sẽ có sẵn tại: https://dungnc7.github.io/wedding/');
console.log('\x1b[33m%s\x1b[0m', '⏳ Lưu ý: Có thể mất vài phút để GitHub Pages cập nhật các thay đổi.');
console.log('\x1b[36m%s\x1b[0m', '🎉 Trang web thiệp cưới tĩnh đã được tạo thành công với đầy đủ nội dung và hiệu ứng!');