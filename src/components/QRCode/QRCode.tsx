'use client';

import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';

interface BankAccountProps {
  name: string;
  bank: string;
  accountNumber: string;
  qrValue: string;
  role: 'bride' | 'groom';
}

const BankAccount: React.FC<BankAccountProps> = ({ name, bank, accountNumber, qrValue, role }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-dancing text-2xl text-primary mb-4">
        {role === 'bride' ? 'Cô dâu' : 'Chú rể'}
      </h3>
      <div className="flex justify-center mb-4">
        <QRCodeCanvas 
          value={qrValue} 
          size={200}
          bgColor="#FFFFFF"
          fgColor="#4f8e62"
          level="H"
          includeMargin={true}
        />
      </div>
      <div className="mt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{bank} - {accountNumber}</p>
      </div>
    </motion.div>
  );
};

interface QRCodeSectionProps {
  brideAccount: {
    name: string;
    bank: string;
    accountNumber: string;
    qrValue: string;
  };
  groomAccount: {
    name: string;
    bank: string;
    accountNumber: string;
    qrValue: string;
  };
}

const QRCodeSection: React.FC<QRCodeSectionProps> = ({ brideAccount, groomAccount }) => {
  return (
    <section id="gifts" className="py-16 bg-primary-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title" data-aos="fade-up">Mừng Cưới</h2>
        
        <p className="mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi.
          Nếu không thể đến tham dự, quý vị có thể gửi lời chúc mừng qua:
        </p>
        
        <div className="grid @md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <BankAccount 
            name={groomAccount.name} 
            bank={groomAccount.bank} 
            accountNumber={groomAccount.accountNumber} 
            qrValue={groomAccount.qrValue}
            role="groom"
          />
          
          <BankAccount 
            name={brideAccount.name} 
            bank={brideAccount.bank} 
            accountNumber={brideAccount.accountNumber} 
            qrValue={brideAccount.qrValue}
            role="bride"
          />
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;