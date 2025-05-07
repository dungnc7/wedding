'use client';

import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Couple = () => {
  const { theme } = useTheme();

  const themeStyles = {
    modern: {
      section: "py-20 bg-slate-50",
      title: "text-4xl font-serif font-bold text-center mb-12 text-slate-800",
      personContainer: "text-center p-6",
      imageContainer: "relative mx-auto mb-6 overflow-hidden rounded-full w-64 h-64 border-4 border-slate-200 shadow-lg",
      image: "object-cover object-center w-full h-full transition-transform duration-500 hover:scale-110",
      name: "font-['Great_Vibes'] text-3xl md:text-4xl mb-2 text-slate-800 drop-shadow-md",
      role: "text-slate-600 text-lg mb-4",
      familyTitle: "text-slate-500 text-sm",
      familyName: "font-medium mb-4 text-slate-700",
      address: "text-slate-500 italic",
      heartIcon: "text-slate-400 text-2xl mx-4 animate-pulse"
    },
    rustic: {
      section: "py-20 bg-amber-50",
      title: "text-4xl font-serif font-bold text-center mb-12 text-amber-900",
      personContainer: "text-center p-6",
      imageContainer: "relative mx-auto mb-6 overflow-hidden rounded-full w-64 h-64 border-4 border-amber-200 shadow-lg",
      image: "object-cover object-center w-full h-full transition-transform duration-500 hover:scale-110",
      name: "font-['Dancing_Script'] text-3xl md:text-4xl font-bold mb-2 text-amber-900 drop-shadow-md",
      role: "text-amber-700 text-lg mb-4",
      familyTitle: "text-amber-600 text-sm",
      familyName: "font-medium mb-4 text-amber-800",
      address: "text-amber-600 italic",
      heartIcon: "text-amber-500 text-2xl mx-4 animate-pulse"
    },
    minimalist: {
      section: "py-20 bg-white",
      title: "text-4xl font-sans font-bold text-center mb-12 text-gray-800",
      personContainer: "text-center p-6",
      imageContainer: "relative mx-auto mb-6 overflow-hidden rounded-full w-64 h-64 border-4 border-gray-100 shadow-md",
      image: "object-cover object-center w-full h-full transition-transform duration-500 hover:scale-110",
      name: "font-['Great_Vibes'] text-3xl md:text-4xl mb-2 text-gray-800 drop-shadow-sm",
      role: "text-gray-600 text-lg mb-4",
      familyTitle: "text-gray-500 text-sm",
      familyName: "font-medium mb-4 text-gray-700",
      address: "text-gray-500 italic",
      heartIcon: "text-gray-400 text-2xl mx-4 animate-pulse"
    },
    classic: {
      section: "py-20 bg-primary-light/20",
      title: "text-4xl font-serif font-bold text-center mb-12 text-primary-dark",
      personContainer: "text-center p-6",
      imageContainer: "relative mx-auto mb-6 overflow-hidden rounded-full w-64 h-64 border-4 border-primary-light shadow-lg",
      image: "object-cover object-center w-full h-full transition-transform duration-500 hover:scale-110",
      name: "font-['Dancing_Script'] text-3xl md:text-4xl font-bold mb-2 text-primary drop-shadow-md",
      role: "text-primary-dark text-lg mb-4",
      familyTitle: "text-primary-dark/70 text-sm",
      familyName: "font-medium mb-4 text-primary-dark",
      address: "text-primary-dark/70 italic",
      heartIcon: "text-accent text-2xl mx-4 animate-pulse"
    }
  };

  const styles = themeStyles[theme];

  return (
    <section id="couple" className={styles.section}>
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">Cô dâu & Chú rể</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-5/12" data-aos="fade-right" data-aos-duration="1000">
            <div className={styles.personContainer}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/groom.jpg" 
                  alt="Chú rể" 
                  className={styles.image}
                  width={256}
                  height={256}
                />
              </div>
              <h3 className={styles.name}>Mã Hoàng Tâm</h3>
              <p className={styles.role}>Trưởng Nam</p>
              <p className={styles.familyTitle}>Của Ông Bà:</p>
              <p className={styles.familyName}>Mã Hi Tuấn & Lê Thị Thúy Linh</p>
              <p className={styles.address}>Q. Bình Thạnh, TP. HCM</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:w-2/12 my-8 md:my-0">
            <FaHeart className={styles.heartIcon} />
          </div>
          
          <div className="md:w-5/12" data-aos="fade-left" data-aos-duration="1000">
            <div className={styles.personContainer}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/images/bride.jpg" 
                  alt="Cô dâu" 
                  className={styles.image}
                  width={256}
                  height={256}
                />
              </div>
              <h3 className={styles.name}>Lại Thị Hoàng Yến</h3>
              <p className={styles.role}>Trưởng Nữ</p>
              <p className={styles.familyTitle}>Của Ông Bà:</p>
              <p className={styles.familyName}>Lại Duy Huệ & Trần Thị Hòa</p>
              <p className={styles.address}>Q. Bình Thạnh, TP. HCM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;