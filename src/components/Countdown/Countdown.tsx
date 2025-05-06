'use client';

import React from 'react';
import ReactCountdown from 'react-countdown';
import { motion } from 'framer-motion';

interface CountdownProps {
  date: Date;
}

const WeddingCountdown: React.FC<CountdownProps> = ({ date }) => {
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
      // Hiển thị đếm ngược
      return (
        <div className="flex justify-center gap-4 @md:gap-10 text-center">
          <motion.div 
            className="bg-white p-4 @md:p-6 rounded-lg shadow-md w-20 @md:w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl @md:text-5xl font-bold text-primary">{days}</div>
            <div className="text-gray-600 text-sm @md:text-base mt-2">Ngày</div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 @md:p-6 rounded-lg shadow-md w-20 @md:w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl @md:text-5xl font-bold text-primary">{hours}</div>
            <div className="text-gray-600 text-sm @md:text-base mt-2">Giờ</div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 @md:p-6 rounded-lg shadow-md w-20 @md:w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl @md:text-5xl font-bold text-primary">{minutes}</div>
            <div className="text-gray-600 text-sm @md:text-base mt-2">Phút</div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 @md:p-6 rounded-lg shadow-md w-20 @md:w-32"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl @md:text-5xl font-bold text-primary">{seconds}</div>
            <div className="text-gray-600 text-sm @md:text-base mt-2">Giây</div>
          </motion.div>
        </div>
      );
    }
  };

  return (
    <div className="py-16 bg-primary-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title" data-aos="fade-up">Đếm ngược đến ngày cưới</h2>
        
        <div className="mt-8" data-aos="zoom-in">
          <ReactCountdown
            date={date}
            renderer={renderer}
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;