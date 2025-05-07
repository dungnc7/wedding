'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import customLoader from '@/app/image-loader';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary-light to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl mb-3 text-gray-800 @md:text-2xl">Trân trọng kính mời</h3>
          <h1 className="font-great-vibes text-5xl text-primary mb-4 @md:text-7xl">Tâm & Yến</h1>
          <p className="text-lg mb-6 @md:text-xl">Wedding Invitation</p>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-accent"></div>
          </div>
          <h2 className="text-2xl @md:text-3xl">
            Chủ Nhật, 25/05/2025
          </h2>
          <p className="mt-2 text-gray-600">
            Nhằm ngày 28 tháng 04 năm Ất Tỵ
          </p>
          
          <a 
            href="#couple" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '32px',
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingTop: '12px',
              paddingBottom: '12px',
              backgroundColor: '#4f8e62',
              color: 'white',
              borderRadius: '9999px',
              fontWeight: '500',
              textDecoration: 'none', // This removes the underline
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3a6b49';
              const svg = e.currentTarget.querySelector('svg');
              if (svg) {
                svg.style.transform = 'translateX(4px)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4f8e62';
              const svg = e.currentTarget.querySelector('svg');
              if (svg) {
                svg.style.transform = 'translateX(0)';
              }
            }}
          >
            <span>Xem thêm</span>
            <svg 
              style={{
                width: '16px',
                height: '16px',
                transition: 'transform 0.3s'
              }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Các hình ảnh trang trí */}
      <motion.div
        className="absolute -bottom-8 -left-16 w-32 h-32 @md:w-64 @md:h-64"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <div className="relative w-full h-full" style={{ height: '100%', width: '100%' }}>
          <Image 
            loader={customLoader}
            src="./images/flower-1.png"
            alt="Flower decoration"
            width={256}
            height={256}
            className="opacity-30"
            priority={true}
            unoptimized={true}
          />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute -top-10 -right-16 w-32 h-32 @md:w-64 @md:h-64"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -5, 0] 
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <div className="relative w-full h-full" style={{ height: '100%', width: '100%' }}>
          <Image 
            loader={customLoader}
            src="./images/flower-2.png"
            alt="Flower decoration"
            width={256}
            height={256}
            className="opacity-30"
            priority={true}
            unoptimized={true}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
