'use client';

import Image from 'next/image';

interface AccountInfo {
  name: string;
  bank: string;
  accountNumber: string;
  qrValue?: string;
}

interface QRCodeProps {
  groomAccount: AccountInfo;
  brideAccount: AccountInfo;
}

const QRCodeSection = ({ groomAccount, brideAccount }: QRCodeProps) => {
  return (
    <section id="qrcode" className="section bg-gray">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Mừng cưới</h2>
        <p className="section-subtitle" data-aos="fade-up">Nếu bạn muốn gửi lời chúc mừng đến cô dâu và chú rể</p>
        
        <div className="qrcode-container">
          <div className="qrcode-card" data-aos="fade-right" data-aos-duration="1000">
            <div className="qrcode-title">Chú rể</div>
            <div className="qrcode-name">{groomAccount.name}</div>
            <div className="qrcode-bank">{groomAccount.bank}</div>
            <div className="qrcode-account">{groomAccount.accountNumber}</div>
            <div className="qrcode-image">
              <Image 
                src={groomAccount.qrValue || "/images/qr-groom.png"}
                alt="QR Code chú rể"
                width={200}
                height={200}
              />
            </div>
          </div>
          
          <div className="qrcode-card" data-aos="fade-left" data-aos-duration="1000">
            <div className="qrcode-title">Cô dâu</div>
            <div className="qrcode-name">{brideAccount.name}</div>
            <div className="qrcode-bank">{brideAccount.bank}</div>
            <div className="qrcode-account">{brideAccount.accountNumber}</div>
            <div className="qrcode-image">
              <Image 
                src={brideAccount.qrValue || "/images/qr-bride.png"}
                alt="QR Code cô dâu"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;