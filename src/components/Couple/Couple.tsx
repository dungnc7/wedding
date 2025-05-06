'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import customLoader from '@/app/image-loader';

interface PersonProps {
  name: string;
  role: string;
  parents: string;
  address: string;
  image: string;
  animation: 'left' | 'right';
}

const Person: React.FC<PersonProps> = ({ name, role, parents, address, image, animation }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, x: animation === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-light" style={{ width: '16rem', height: '16rem' }}>
        <Image 
          loader={customLoader}
          src={image} 
          alt={name} 
          width={256}
          height={256}
          style={{ objectFit: 'cover' }}
          priority={true}
          unoptimized={true}
          className="rounded-full"
        />
      </div>
      <h3 className="font-dancing text-3xl text-primary mb-2">{name}</h3>
      <p className="mb-4">{role}</p>
      <p className="mb-2">Của Ông Bà:</p>
      <p className="font-semibold">{parents}</p>
      <p className="text-gray-600 mt-2">{address}</p>
    </motion.div>
  );
};

const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">Cô dâu & Chú rể</h2>
        
        <div className="grid @md:grid-cols-2 gap-10 mt-12">
          <Person 
            name="Mã Hoàng Tâm"
            role="Trưởng Nam"
            parents="Mã Hi Tuấn & Lê Thị Thúy Linh"
            address="Q. Bình Thạnh, TP. HCM"
            image="/images/groom.jpg"
            animation="left"
          />
          
          <Person 
            name="Lại Thị Hoàng Yến"
            role="Trưởng Nữ"
            parents="Lại Duy Huệ & Trần Thị Hòa"
            address="Q. Bình Thạnh, TP. HCM"
            image="/images/bride.jpg"
            animation="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Couple;