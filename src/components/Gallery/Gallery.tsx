'use client';

import Image from 'next/image';

const Gallery = () => {
  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Khoảnh khắc</h2>
        <p className="section-subtitle" data-aos="fade-up">Những kỷ niệm đáng nhớ của chúng tôi</p>
        
        <div className="gallery-grid">
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/images/gallery/wedding1.jpg"
              alt="Hình cưới 1"
              className="gallery-image"
              width={400}
              height={250}
            />
          </div>
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
            <Image
              src="/images/gallery/wedding2.jpg"
              alt="Hình cưới 2"
              className="gallery-image"
              width={400}
              height={250}
            />
          </div>
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="300">
            <Image
              src="/images/groom-bride.png"
              alt="Hình cưới 3"
              className="gallery-image"
              width={400}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;