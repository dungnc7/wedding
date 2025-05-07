'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import customLoader from '@/app/image-loader';
import { withBasePath } from '@/utils/basePath';

interface GalleryProps {
  title?: string;
  subtitle?: string;
}

const Gallery: React.FC<GalleryProps> = ({ title = "Our Gallery", subtitle = "Sweet Memories" }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  // Example gallery images - update with your actual image paths
  const images = [
    withBasePath('images/gallery/wedding1.jpg'),
    withBasePath('images/gallery/wedding2.jpg'),
    // Add more images as needed
  ];

  // Only show first 4 images initially
  const visibleImages = showAll ? images : images.slice(0, 4);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">{title}</h2>
          <p className="text-primary-dark mt-2">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image 
                  loader={customLoader}
                  src={img} 
                  alt={`Wedding gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={true}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {images.length > 4 && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium shadow-lg hover:shadow-pink-200/50 transition-all duration-300 ease-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
              
              {/* Button text */}
              <span className="relative flex items-center gap-2">
                {showAll ? 'Thu gọn' : 'Xem thêm'}
                
                {/* Animated arrow icon */}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={showAll ? "M19 9l-7 7-7-7" : "M13 5l7 7-7 7"}
                  />
                </svg>
              </span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;