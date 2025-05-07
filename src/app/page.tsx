'use client';

import { useEffect } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Couple from "@/components/Couple/Couple";
import WeddingCountdown from "@/components/Countdown/Countdown";
import Events from "@/components/Events/Events";
import QRCodeSection from "@/components/QRCode/QRCode";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Đặt ngày cưới - 25/05/2025
  const weddingDate = new Date('2025-05-25T09:30:00');

  // Thông tin chuyển khoản
  const groomAccount = {
    name: "Mã Hoàng Tâm",
    bank: "MB Bank",
    accountNumber: "0123456789",
    qrValue: "https://example.com/qr-code-groom",
  };

  const brideAccount = {
    name: "Lại Thị Hoàng Yến",
    bank: "Vietcombank",
    accountNumber: "0987654321",
    qrValue: "https://example.com/qr-code-bride",
  };

  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      <Hero />
      <Couple />
      <WeddingCountdown date={weddingDate} />
      <Events />
      <QRCodeSection brideAccount={brideAccount} groomAccount={groomAccount} />
      
      {/* Footer Section */}
      <footer className="py-8 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-great-vibes text-3xl mb-4">Tâm & Yến</h2>
          <p className="mb-4">
            Cảm ơn quý vị đã dành thời gian ghé thăm trang web của chúng tôi.
            <br/>Rất hân hạnh được đón tiếp!
          </p>
          <p className="text-sm text-white/70">© {new Date().getFullYear()} | Wedding Website</p>
        </div>
      </footer>
    </div>
  );
}
