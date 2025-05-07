'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  date: Date;
}

const WeddingCountdown = ({ date }: CountdownProps) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const weddingDate = date.getTime();
      const distance = weddingDate - now;
      
      if (distance > 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    };
    
    // Cập nhật ngay lập tức
    updateCountdown();
    
    // Thiết lập interval để cập nhật mỗi giây
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [date]);
  
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section id="countdown" className="section text-white text-center" style={{
      backgroundImage: 'linear-gradient(rgba(79, 142, 98, 0.8), rgba(79, 142, 98, 0.8)), url("/images/groom-bride.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container">
        <h2 className="section-title text-white" data-aos="fade-up">Đếm ngược đến ngày vui</h2>
        
        <div className="countdown-container" data-aos="fade-up">
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(days)}</div>
            <div className="countdown-label">Ngày</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(hours)}</div>
            <div className="countdown-label">Giờ</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(minutes)}</div>
            <div className="countdown-label">Phút</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-number">{formatNumber(seconds)}</div>
            <div className="countdown-label">Giây</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCountdown;