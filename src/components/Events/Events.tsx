'use client';

import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface EventCardProps {
  title: string;
  date: string;
  time: string | React.ReactNode;
  location: string | React.ReactNode;
  animation: 'left' | 'right';
}

const EventCard: React.FC<EventCardProps> = ({ title, date, time, location, animation }) => {
  return (
    <motion.div 
      className="bg-primary-light p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, x: animation === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary p-3 rounded-full text-white mr-4">
          <FaCalendarAlt size={24} />
        </div>
        <h3 className="text-2xl font-dancing text-primary">{title}</h3>
      </div>
      
      <p className="mb-4 font-semibold">{date}</p>
      
      <div className="flex items-start mb-4">
        <div className="text-primary mt-1 mr-3">
          <FaClock size={18} />
        </div>
        <div>
          {time}
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="text-primary mt-1 mr-3">
          <FaMapMarkerAlt size={18} />
        </div>
        <div>
          {location}
        </div>
      </div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">Sự Kiện Cưới</h2>
        
        <div className="grid @md:grid-cols-2 gap-10 mt-12">
          <EventCard 
            title="Lễ Cưới"
            date="Chủ Nhật, 25/05/2025"
            time="09 giờ 30"
            location="Tại tư gia"
            animation="left"
          />
          
          <EventCard 
            title="Tiệc Cưới"
            date="Chủ Nhật, 25/05/2025"
            time={
              <>
                <p>Đón khách: 11:00</p>
                <p>Làm lễ: 11:30</p>
                <p>Khai tiệc: 12:00</p>
              </>
            }
            location={
              <>
                <p className="font-semibold">Nhà hàng Gold Palace</p>
                <p>Sảnh Grand Gold - Tầng 2</p>
                <p>329 Nơ Trang Long, Phường 13</p>
                <p>Q. Bình Thạnh, TP. HCM</p>
              </>
            }
            animation="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;