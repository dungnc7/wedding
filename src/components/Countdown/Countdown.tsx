'use client';

import React, { useState, useEffect } from 'react';
import ReactCountdown from 'react-countdown';
import { motion } from 'framer-motion';

interface CountdownProps {
  date: Date;
}

const WeddingCountdown: React.FC<CountdownProps> = ({ date }) => {
  // Thêm state để kiểm soát việc hiển thị countdown
  const [isClient, setIsClient] = useState(false);

  // Sử dụng useEffect để chỉ hiển thị countdown ở client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Renderer cho đồng hồ đếm ngược
  const renderer = ({ days, hours, minutes, seconds, completed }: { 
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Hiển thị khi đã đến ngày cưới
      return (
        <div className="text-center py-8">
          <h3 className="text-3xl font-dancing text-primary">Hôm nay là ngày cưới!</h3>
          <p className="text-xl mt-4">Cảm ơn quý vị đã đến chung vui cùng chúng tôi!</p>
        </div>
      );
    } else {
      return (
        <div className="text-center">
          <h2 className="font-great-vibes text-4xl @md:text-5xl text-primary mb-8">Đếm ngược đến ngày cưới</h2>
          
          <div className="flex flex-col @md:flex-row justify-center items-center gap-2 @md:gap-6 text-center">
            <motion.div 
              className="text-3xl @md:text-5xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {days} ngày
            </motion.div>
            
            <motion.div 
              className="text-3xl @md:text-5xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {hours} giờ
            </motion.div>
            
            <motion.div 
              className="text-3xl @md:text-5xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {minutes} phút
            </motion.div>
            
            <motion.div 
              className="text-3xl @md:text-5xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {seconds} giây
            </motion.div>
          </div>
          
        </div>
      );
    }
  };

  return (
    <div className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <div data-aos="zoom-in">
          {/* Chỉ hiển thị countdown khi ở client side */}
          {isClient ? (
            <ReactCountdown
              date={date}
              renderer={renderer}
            />
          ) : (
            <div className="text-center">
              <h2 className="font-great-vibes text-4xl @md:text-5xl text-primary mb-8">Đếm ngược đến ngày cưới</h2>
              
              <div className="flex flex-col @md:flex-row justify-center items-center gap-2 @md:gap-6 text-center">
                <div className="text-3xl @md:text-5xl font-bold text-primary">
                  -- ngày
                </div>
                <div className="text-3xl @md:text-5xl font-bold text-primary">
                  -- giờ
                </div>
                <div className="text-3xl @md:text-5xl font-bold text-primary">
                  -- phút
                </div>
                <div className="text-3xl @md:text-5xl font-bold text-primary">
                  -- giây
                </div>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;