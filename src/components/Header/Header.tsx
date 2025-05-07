'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/95 shadow-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-greatVibes text-3xl text-primary">
          Tâm & Yến
        </Link>

        <nav>
          <ul 
            className={`md:flex md:items-center ${
              isMenuOpen 
                ? 'fixed top-[60px] left-0 w-full bg-white flex flex-col items-center gap-5 py-8 shadow-md z-40' 
                : 'hidden md:flex'
            }`}
          >
            <li>
              <Link 
                href="#hero" 
                onClick={closeMenu}
                className="md:ml-8 text-base font-medium text-textColor hover:text-primary transition-colors"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link 
                href="#couple" 
                onClick={closeMenu}
                className="md:ml-8 text-base font-medium text-textColor hover:text-primary transition-colors"
              >
                Cô dâu & Chú rể
              </Link>
            </li>
            <li>
              <Link 
                href="#events" 
                onClick={closeMenu}
                className="md:ml-8 text-base font-medium text-textColor hover:text-primary transition-colors"
              >
                Sự kiện
              </Link>
            </li>
            <li>
              <Link 
                href="#gallery" 
                onClick={closeMenu}
                className="md:ml-8 text-base font-medium text-textColor hover:text-primary transition-colors"
              >
                Hình ảnh
              </Link>
            </li>
            <li>
              <Link 
                href="#rsvp" 
                onClick={closeMenu}
                className="md:ml-8 text-base font-medium text-textColor hover:text-primary transition-colors"
              >
                RSVP
              </Link>
            </li>
            <li>
              <Link 
                href="#qrcode" 
                onClick={closeMenu}
                className="md:ml-8 text-base font-medium text-textColor hover:text-primary transition-colors"
              >
                Mừng cưới
              </Link>
            </li>
            <li>
              <Link 
                href="#map" 
                onClick={closeMenu}
                className="md:ml-8 text-base font-medium text-textColor hover:text-primary transition-colors"
              >
                Bản đồ
              </Link>
            </li>
          </ul>
          
          <button 
            className="block md:hidden text-2xl text-primary"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
