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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        padding: scrolled ? '0.5rem 0' : '1rem 0',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link href="#home">
            <span style={{ 
              fontFamily: 'var(--font-great-vibes), cursive', 
              fontSize: '1.5rem', 
              color: scrolled ? '#4f8e62' : '#ffffff'
            }}>
              Tâm & Yến
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <nav style={{ display: 'none' }} className="desktop-menu">
            <ul style={{ 
              display: 'flex', 
              gap: '2rem',
              listStyleType: 'none',
              margin: 0,
              padding: 0
            }}>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    style={{ 
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: scrolled ? '#1f2937' : '#ffffff',
                      transition: 'color 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = scrolled ? '#4f8e62' : '#ffd700';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = scrolled ? '#1f2937' : '#ffffff';
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            style={{ 
              display: 'block',
              border: 'none',
              background: 'none',
              fontSize: '1.5rem',
              color: scrolled ? '#4f8e62' : '#ffffff',
              cursor: 'pointer'
            }}
            className="mobile-menu-button"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
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
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#4f8e62',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
            <button 
              style={{ 
                color: '#ffffff',
                fontSize: '1.5rem',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
          
          <ul style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            flex: 1,
            gap: '2rem',
            listStyleType: 'none',
            margin: 0,
            padding: 0
          }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  style={{ 
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    transition: 'color 0.3s',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#ffd700';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none !important;
          }
          .desktop-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
