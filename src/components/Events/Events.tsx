'use client';

import { FaGlassCheers, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Events = () => {
  return (
    <section id="events" className="section bg-gray">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Lịch trình sự kiện</h2>
        <p className="section-subtitle" data-aos="fade-up">Hân hạnh được đón tiếp quý khách</p>
        
        <div className="event-card" data-aos="fade-up" data-aos-duration="1000">
          <div className="event-icon">
            <FaGlassCheers />
          </div>
          <h3 className="event-title">Tiệc cưới</h3>
          <div className="event-details">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaCalendarAlt />
              <span>Chủ nhật, ngày 25/05/2025 (28/04 Ất Tỵ)</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaClock />
              <span>Từ 17:30 - 21:00</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt />
              <span>PARADISE WEDDING CENTER - Số 55 Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;