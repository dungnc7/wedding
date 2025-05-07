'use client';

const Map = () => {
  return (
    <section id="map" className="section bg-white">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Địa điểm</h2>
        <p className="section-subtitle" data-aos="fade-up">PARADISE WEDDING CENTER - 55 Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh</p>
        
        <div className="map-container" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447329547372!2d106.6803316!3d10.7765738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1b888ab357%3A0xc469f6e800231314!2zNTUgxJAuIEzDqiBWxINuIFPhu7ksIFBoxrDhu51uZyAxMCwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1683716365525!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;