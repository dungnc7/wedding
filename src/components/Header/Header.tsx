'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaHeart, FaCalendarAlt, FaGift } from 'react-icons/fa';
import { GiLovers, GiDiamondRing, GiPartyPopper, GiCakeSlice } from 'react-icons/gi';

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
  
  // Danh sách menu with icons - setting icon color to primary green
  const menuItems = [
    { 
      name: 'Trang Chủ', 
      href: '#home', 
      icon: <FaHome className="inline-block mr-1 transition-transform duration-300" style={{ color: '#4f8e62' }} /> 
    },
    { 
      name: 'Cô Dâu & Chú Rể', 
      href: '#couple', 
      icon: <GiLovers className="inline-block mr-1 transition-transform duration-300" style={{ color: '#4f8e62' }} /> 
    },
    { 
      name: 'Sự Kiện', 
      href: '#events', 
      icon: <GiPartyPopper className="inline-block mr-1 transition-transform duration-300" style={{ color: '#4f8e62' }} /> 
    },
    { 
      name: 'Mừng Cưới', 
      href: '#gifts', 
      icon: <FaGift className="inline-block mr-1 transition-transform duration-300" style={{ color: '#4f8e62' }} /> 
    },
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
              {/* Wedding rings icon for the logo - also in primary green */}
              <GiDiamondRing 
                className="inline-block mr-2 transition-all duration-300" 
                style={{ 
                  color: scrolled ? '#4f8e62' : '#ffffff',
                  transform: 'translateY(0)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) rotate(15deg)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                }}
              />
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
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = scrolled ? '#4f8e62' : '#ffd700';
                      // Make icon match text on hover and add animation
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) {
                        icon.style.color = scrolled ? '#4f8e62' : '#ffd700';
                        icon.style.transform = 'scale(1.2) translateY(-2px)';
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = scrolled ? '#1f2937' : '#ffffff';
                      // Reset icon color when not hovering
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) {
                        icon.style.color = '#4f8e62';
                        icon.style.transform = 'scale(1) translateY(0)';
                      }
                    }}
                  >
                    {item.icon}
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
            {menuItems.map((item, index) => {
              // Create a version of the icon with white color for mobile menu
              const mobileIcon = React.cloneElement(item.icon, { 
                style: { color: '#ffffff', transition: 'all 0.3s ease' },
                className: "inline-block transition-all duration-300"
              });
              
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    style={{ 
                      color: '#ffffff',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      transition: 'color 0.3s',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#ffd700';
                      // Make mobile icon match text on hover with animation
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) {
                        icon.style.color = '#ffd700';
                        icon.style.transform = 'translateX(-4px) rotate(10deg)';
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      // Reset mobile icon color when not hovering
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) {
                        icon.style.color = '#ffffff';
                        icon.style.transform = 'translateX(0) rotate(0deg)';
                      }
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Make mobile menu icons larger */}
                    <span style={{ fontSize: '1.75rem', transition: 'transform 0.3s' }}>
                      {mobileIcon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            {/* Add cake icon at the bottom as a decorative element with animation */}
            <motion.li 
              style={{ marginTop: '2rem', opacity: 0.7 }}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <GiCakeSlice size={40} color="#fff" />
            </motion.li>
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
