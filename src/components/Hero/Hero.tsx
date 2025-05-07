'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  // Function để tạo hiệu ứng trái tim bay
  useEffect(() => {
    const createHeart = () => {
      const heartContainer = document.getElementById('heartsContainer');
      if (!heartContainer) return;

      const heart = document.createElement('div');
      heart.classList.add('heart');

      // Vị trí ngẫu nhiên
      heart.style.left = `${Math.random() * 100}%`;

      // Thời gian animation ngẫu nhiên
      const duration = Math.random() * 3 + 4; // 4-7s
      heart.style.animationDuration = `${duration}s`;

      // Kích thước ngẫu nhiên
      const size = Math.random() * 20 + 20; // 20-40px
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.backgroundImage = `url('/images/heart.svg')`;

      heartContainer.appendChild(heart);

      // Xóa heart sau khi animation kết thúc
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    };

    // Tạo hearts định kỳ
    const heartInterval = setInterval(createHeart, 1000);

    // Tạo hearts ban đầu
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, i * 300);
    }

    return () => {
      clearInterval(heartInterval);
    };
  }, []);

  const themeStyles = {
    modern: {
      section: "min-h-screen bg-gradient-to-b from-slate-100 to-white flex items-center justify-center text-center relative overflow-hidden pt-20",
      intro: "text-lg font-light tracking-wide mb-2 text-gray-600",
      names: "font-['Great_Vibes'] text-5xl md:text-7xl lg:text-8xl mb-2 text-slate-800 relative drop-shadow-lg text-shadow-wedding",
      namesWrapper: "relative inline-block before:content-[''] before:absolute before:-bottom-2 before:left-1/4 before:w-1/2 before:h-1 before:bg-slate-400",
      invite: "text-xl font-light tracking-widest mb-4 text-gray-600",
      divider: "w-20 h-px bg-slate-400 mx-auto mb-4",
      date: "text-2xl font-medium mb-1 text-slate-700",
      lunar: "text-md mb-8 text-gray-500",
      button: "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-800 text-white hover:bg-slate-700 transition-colors duration-300 group"
    },
    rustic: {
      section: "min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center text-center relative overflow-hidden pt-20",
      intro: "text-lg font-light tracking-wide mb-2 text-amber-800",
      names: "font-['Dancing_Script'] text-5xl md:text-7xl lg:text-8xl font-bold mb-2 text-amber-900 relative drop-shadow-lg text-shadow-wedding",
      namesWrapper: "relative inline-block before:content-[''] before:absolute before:-bottom-2 before:left-1/4 before:w-1/2 before:h-1 before:bg-amber-400",
      invite: "text-xl font-light tracking-widest mb-4 text-amber-700",
      divider: "w-20 h-px bg-amber-400 mx-auto mb-4",
      date: "text-2xl font-medium mb-1 text-amber-800",
      lunar: "text-md mb-8 text-amber-600",
      button: "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-amber-700 text-white hover:bg-amber-600 transition-colors duration-300 group"
    },
    minimalist: {
      section: "min-h-screen bg-white flex items-center justify-center text-center relative overflow-hidden pt-20",
      intro: "text-lg font-light tracking-wide mb-2 text-gray-500",
      names: "font-['Great_Vibes'] text-5xl md:text-7xl lg:text-8xl mb-2 text-gray-800 relative drop-shadow-md text-shadow-wedding",
      namesWrapper: "relative inline-block before:content-[''] before:absolute before:-bottom-2 before:left-1/4 before:w-1/2 before:h-0.5 before:bg-gray-300",
      invite: "text-xl font-light tracking-widest mb-4 text-gray-500",
      divider: "w-20 h-px bg-gray-300 mx-auto mb-4",
      date: "text-2xl font-medium mb-1 text-gray-700",
      lunar: "text-md mb-8 text-gray-400",
      button: "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 group"
    },
    classic: {
      section: "min-h-screen bg-gradient-to-b from-primary-light to-white flex items-center justify-center text-center relative overflow-hidden pt-20",
      intro: "text-lg font-light tracking-wide mb-2 text-primary-dark",
      names: "font-['Dancing_Script'] text-5xl md:text-7xl lg:text-8xl font-bold mb-2 text-primary relative drop-shadow-lg text-shadow-wedding",
      namesWrapper: "relative inline-block before:content-[''] before:absolute before:-bottom-2 before:left-1/4 before:w-1/2 before:h-1 before:bg-accent",
      invite: "text-xl font-light tracking-widest mb-4 text-primary-dark",
      divider: "w-20 h-px bg-accent mx-auto mb-4",
      date: "text-2xl font-medium mb-1 text-primary-dark",
      lunar: "text-md mb-8 text-primary-dark/80",
      button: "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-300 group"
    }
  };

  const styles = themeStyles[theme];

  return (
    <section id="hero" className={styles.section}>
      <div id="heartsContainer" className="absolute inset-0 pointer-events-none z-0"></div>

      <div className="container z-10 py-10">
        <div data-aos="fade-down" data-aos-duration="1000">
          <p className={styles.intro}>Trân trọng kính mời</p>
          <div className={styles.namesWrapper}>
            <h1 className={styles.names}>Tâm & Yến</h1>
          </div>
          <p className={styles.invite}>Wedding Invitation</p>
          <div className={styles.divider}></div>
          <h2 className={styles.date}>Chủ Nhật, 25/05/2025</h2>
          <p className={styles.lunar}>Nhằm ngày 28 tháng 04 năm Ất Tỵ</p>
          <Link href="#couple" className={styles.button}>
            <span>Xem thêm</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
