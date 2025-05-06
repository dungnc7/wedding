'use client';

import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUtensils, FaGlassCheers, FaDirections, FaHeart } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface EventCardProps {
  title: string;
  date: string;
  time: string | React.ReactNode;
  location: string | React.ReactNode;
  animation: 'left' | 'right';
  dinner?: React.ReactNode;
  mapUrl?: string;
}

// Card component - căn lại nội dung bên trái
const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, animation, dinner, mapUrl }) => {
  return (
    <motion.div 
      className="bg-primary-light p-6 rounded-lg shadow-md relative overflow-hidden"
      initial={{ opacity: 0, x: animation === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Icon trang trí góc */}
      <div className="absolute -top-4 -right-4 bg-primary/10 rounded-full p-8">
        <FaHeart className="text-primary/30" size={32} /> 
      </div>
      
      <div className="flex items-center mb-4">
        <div className="bg-primary p-3 rounded-full text-white mr-5">
          <FaCalendarAlt size={24} />
        </div>
        <h3 className="text-2xl font-dancing text-primary">{title}</h3>
      </div>
      
      <p className="mb-4 font-semibold">{date}</p>
      
      <div className="flex items-start mb-4">
        <div className="text-primary mt-1 mr-6 flex-shrink-0">
          <FaClock size={20} />
        </div>
        <div>
          {time}
        </div>
      </div>
      
      <div className="flex items-start mb-4">
        <div className="text-primary mt-1 mr-6 flex-shrink-0">
          <FaMapMarkerAlt size={20} />
        </div>
        <div>
          {location}
        </div>
      </div>
      
      {dinner && (
        <div className="flex items-start mb-4">
          <div className="text-primary mt-1 mr-6 flex-shrink-0">
            <FaUtensils size={20} />
          </div>
          <div>
            {typeof dinner === 'string' ? dinner : (
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <MdCelebration className="text-primary mr-3" size={20} />
                  <span>Tiệc với thực đơn 8 món đặc biệt</span>
                </div>
                <div className="flex items-center">
                  <FaGlassCheers className="text-primary mr-3" size={20} />
                  <span>Free flow nước ngọt, bia và rượu vang</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {mapUrl && (
        <div className="mt-4">
          <Link 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <FaDirections className="mr-3" size={20} />
            <span>Chỉ đường</span>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center" data-aos="fade-up">Sự Kiện Cưới</h2>
        
        <div className="flex flex-col mt-12">
          {/* EventCards (chiếm toàn bộ chiều rộng) */}
          <div className="w-full flex flex-col space-y-8">
            <EventCard 
              title="Lễ Cưới"
              date="Chủ Nhật, 25/05/2025"
              time={
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <motion.span 
                      initial={{ scale: 1 }} 
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary/10 rounded-full px-3 py-1 text-primary font-semibold"
                    >
                      09:30
                    </motion.span>
                    <span className="ml-3">Đón khách</span>
                  </div>
                  <div className="flex items-center">
                    <motion.span 
                      initial={{ scale: 1 }} 
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary/10 rounded-full px-3 py-1 text-primary font-semibold"
                    >
                      10:30
                    </motion.span>
                    <span className="ml-3">Làm lễ</span>
                  </div>
                </div>
              }
              location="Tại tư gia"
              animation="left"
            />
            
            <EventCard 
              title="Tiệc Cưới"
              date="Chủ Nhật, 25/05/2025"
              time={
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <motion.span 
                      initial={{ scale: 1 }} 
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary/10 rounded-full px-3 py-1 text-primary font-semibold"
                    >
                      11:00
                    </motion.span>
                    <span className="ml-3">Đón khách</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <motion.span 
                      initial={{ scale: 1 }} 
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary/10 rounded-full px-3 py-1 text-primary font-semibold"
                    >
                      11:30
                    </motion.span>
                    <span className="ml-3">Làm lễ</span>
                  </div>
                  <div className="flex items-center">
                    <motion.span 
                      initial={{ scale: 1 }} 
                      whileHover={{ scale: 1.1 }}
                      className="bg-primary/10 rounded-full px-3 py-1 text-primary font-semibold"
                    >
                      12:00
                    </motion.span>
                    <span className="ml-3">Khai tiệc</span>
                  </div>
                </div>
              }
              location={
                <>
                  <p className="font-semibold">Nhà hàng Gold Palace</p>
                  <p>Sảnh Grand Gold - Tầng 2</p>
                  <p>329 Nơ Trang Long, Phường 13</p>
                  <p>Q. Bình Thạnh, TP. HCM</p>
                </>
              }
              dinner={
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <MdCelebration className="text-primary mr-2" />
                    <span>Tiệc với thực đơn 8 món đặc biệt</span>
                  </div>
                  <div className="flex items-center">
                    <FaGlassCheers className="text-primary mr-2" />
                    <span>Free flow nước ngọt, bia và rượu vang</span>
                  </div>
                </div>
              }
              mapUrl="https://maps.google.com/?q=329+No+Trang+Long+Binh+Thanh+Ho+Chi+Minh"
              animation="right"
            />
          </div>
        </div>
        
        {/* Bản đồ Google Maps full width ở dưới cùng */}
        <div className="mt-12">
          <motion.div 
            className="rounded-lg overflow-hidden shadow-xl w-full"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative pb-[30%] h-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.119619525639!2d106.69508527586977!3d10.80343358931564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a5d5f393d5%3A0xc44614e5b43d6cee!2zMzI5IE7GoSBUcmFuZyBMb25nLCBQaMaw4budbmcgMTMsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1714364419998!5m2!1svi!2s"
                className="absolute top-0 left-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí nhà hàng tiệc cưới"
              ></iframe>
            </div>
          </motion.div>
          
          <div className="text-center mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDirections className="mr-2" />
              <a 
                href="https://maps.google.com/?q=329+No+Trang+Long+Binh+Thanh+Ho+Chi+Minh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-sm"
              >
                Chỉ đường
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;