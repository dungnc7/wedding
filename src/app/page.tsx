'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Map from '../components/Map';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Couple from '@/components/Couple/Couple';
import WeddingCountdown from '@/components/Countdown/Countdown';
import Events from '@/components/Events/Events';
import Gallery from '@/components/Gallery/Gallery';
import QRCodeSection from '@/components/QRCode/QRCode';

export default function Home() {
  useEffect(() => {
    // Khởi tạo AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // Thiết lập ngày cưới
  const weddingDate = new Date('2025-05-25T17:30:00');

  // Thông tin tài khoản của cô dâu và chú rể
  const groomAccount = {
    name: 'Mã Hoàng Tâm',
    bank: 'Vietcombank',
    accountNumber: '0123456789',
    qrValue: '/images/qr-groom.png' // Thay đường dẫn nếu bạn có file QR thực
  };

  const brideAccount = {
    name: 'Lại Thị Hoàng Yến',
    bank: 'ACB',
    accountNumber: '9876543210',
    qrValue: '/images/qr-bride.png' // Thay đường dẫn nếu bạn có file QR thực
  };

  return (
    <>
      <Head>
        <title>Tâm & Yến - Wedding Invitation</title>
        <meta name="description" content="Thiệp mời dự lễ cưới của Tâm và Yến" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Couple />
        <WeddingCountdown date={weddingDate} />
        <Events />
        <Gallery />
        <QRCodeSection groomAccount={groomAccount} brideAccount={brideAccount} />
        <Map />
      </main>

      <footer className="py-8 bg-primary text-white text-center">
        <div className="container">
          <p>© {new Date().getFullYear()} | Tâm & Yến Wedding</p>
        </div>
      </footer>
    </>
  );
}
