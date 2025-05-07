'use client';

import { FaGlassCheers, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaRing, FaUtensils, FaUserFriends } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Events = () => {
  const { theme } = useTheme();

  const themeStyles = {
    modern: {
      section: "py-20 bg-slate-50",
      title: "font-['Great_Vibes'] text-4xl md:text-5xl text-slate-800 text-center mb-8",
      subtitle: "text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12",
      card: "bg-white rounded-lg shadow-lg p-8 mb-8",
      icon: "w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl text-slate-700",
      eventTitle: "text-2xl font-medium text-center mb-3 text-slate-800",
      timelineTitle: "text-xl font-medium text-slate-800 mb-2",
      timelineItem: "flex items-center justify-center gap-2 mb-3 text-slate-700",
      timelineIcon: "text-slate-600 min-w-[1rem]",
      divider: "w-20 h-px bg-slate-300 mx-auto my-8"
    },
    rustic: {
      section: "py-20 bg-amber-50",
      title: "font-['Dancing_Script'] text-4xl md:text-5xl text-amber-900 text-center mb-8",
      subtitle: "text-lg text-amber-800 text-center max-w-2xl mx-auto mb-12",
      card: "bg-white rounded-lg shadow-lg p-8 mb-8 border border-amber-200",
      icon: "w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl text-amber-800",
      eventTitle: "text-2xl font-medium text-center mb-3 text-amber-900",
      timelineTitle: "text-xl font-medium text-amber-800 mb-2",
      timelineItem: "flex items-center justify-center gap-2 mb-3 text-amber-700",
      timelineIcon: "text-amber-600 min-w-[1rem]",
      divider: "w-20 h-px bg-amber-300 mx-auto my-8"
    },
    minimalist: {
      section: "py-20 bg-gray-50",
      title: "font-['Great_Vibes'] text-4xl md:text-5xl text-gray-800 text-center mb-8",
      subtitle: "text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12",
      card: "bg-white rounded-lg shadow-sm p-8 mb-8 border border-gray-100",
      icon: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl text-gray-700",
      eventTitle: "text-2xl font-medium text-center mb-3 text-gray-800",
      timelineTitle: "text-xl font-medium text-gray-800 mb-2",
      timelineItem: "flex items-center justify-center gap-2 mb-3 text-gray-700",
      timelineIcon: "text-gray-500 min-w-[1rem]",
      divider: "w-20 h-px bg-gray-200 mx-auto my-8"
    },
    classic: {
      section: "py-20 bg-primary-light/20",
      title: "font-['Dancing_Script'] text-4xl md:text-5xl text-primary text-center mb-8",
      subtitle: "text-lg text-primary-dark/80 text-center max-w-2xl mx-auto mb-12",
      card: "bg-white rounded-lg shadow-lg p-8 mb-8",
      icon: "w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-5 text-3xl text-primary",
      eventTitle: "text-2xl font-medium text-center mb-3 text-primary-dark",
      timelineTitle: "text-xl font-medium text-primary-dark mb-2",
      timelineItem: "flex items-center justify-center gap-2 mb-3 text-primary-dark/80",
      timelineIcon: "text-primary min-w-[1rem]",
      divider: "w-20 h-px bg-accent mx-auto my-8"
    }
  };

  const styles = themeStyles[theme];

  return (
    <section id="events" className={styles.section}>
      <div className="container mx-auto px-4">
        <h2 className={styles.title} data-aos="fade-up">Lịch trình sự kiện</h2>
        <p className={styles.subtitle} data-aos="fade-up">Hân hạnh được đón tiếp quý khách</p>
        
        <div className={styles.card} data-aos="fade-up" data-aos-duration="1000">
          <div className={styles.icon}>
            <FaGlassCheers />
          </div>
          <h3 className={styles.eventTitle}>Tiệc cưới</h3>
          
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-center italic mb-6">
              "Đến dự buổi tiệc rượu chung vui cùng gia đình chúng tôi tại:"
            </p>

            <div className={styles.timelineItem}>
              <FaCalendarAlt className={styles.timelineIcon} />
              <span className="font-medium">CHỦ NHẬT - 25 | 05 | 2025</span>
            </div>
            <div className="text-center text-sm mb-4">(Nhằm ngày 28 tháng 04 năm Ất Tỵ)</div>

            <div className={styles.timelineItem}>
              <FaClock className={styles.timelineIcon} />
              <span>VÀO LÚC: 11 GIỜ 00 - CHỦ NHẬT</span>
            </div>

            <div className={styles.timelineItem}>
              <FaMapMarkerAlt className={styles.timelineIcon} />
              <div className="text-center">
                <div className="font-medium">TẠI SẢNH GRAND GOLD - TẦNG 2</div>
                <div className="font-bold text-lg mb-1">NHÀ HÀNG GOLD PALACE</div>
                <div>329 Nơ Trang Long, Phường 13, Q. Bình Thạnh, TP. HCM</div>
              </div>
            </div>

            <div className={styles.divider}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex justify-center mb-2">
                  <FaUserFriends className="text-2xl" />
                </div>
                <h4 className="font-medium mb-1">Đón Khách</h4>
                <p>11:00</p>
              </div>
              
              <div>
                <div className="flex justify-center mb-2">
                  <FaRing className="text-2xl" />
                </div>
                <h4 className="font-medium mb-1">Làm Lễ</h4>
                <p>11:30</p>
              </div>
              
              <div>
                <div className="flex justify-center mb-2">
                  <FaUtensils className="text-2xl" />
                </div>
                <h4 className="font-medium mb-1">Khai Tiệc</h4>
                <p>12:00</p>
              </div>
            </div>
            
            <div className="mt-8 text-center italic">
              <p>Sự hiện diện của Quý Khách là niềm vinh hạnh cho gia đình chúng tôi.</p>
              <p className="font-['Dancing_Script'] text-2xl mt-4 font-medium">Rất hân hạnh được đón tiếp!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;