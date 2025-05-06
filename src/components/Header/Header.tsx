'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Kiểm tra scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Danh sách menu
  const menuItems = [
    { name: 'Trang Chủ', href: '#home' },
    { name: 'Cô Dâu & Chú Rể', href: '#couple' },
    { name: 'Sự Kiện', href: '#events' },
    { name: 'Mừng Cưới', href: '#gifts' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home">
            <span className={`font-great-vibes text-2xl @md:text-3xl ${scrolled ? 'text-primary' : 'text-white'}`}>
              Tâm & Yến
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden @md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="@md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <FaBars className={scrolled ? 'text-primary' : 'text-white'} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-primary z-50 flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button 
              className="text-white text-2xl" 
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
          
          <ul className="flex flex-col items-center justify-center flex-1 space-y-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-white text-2xl font-medium hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
