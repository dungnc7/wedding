import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const montserrat = Montserrat({
  subsets: ["vietnamese", "latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["vietnamese", "latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tâm & Yến - Thiệp Mời Đám Cưới",
  description: "Trân trọng kính mời quý vị đến dự buổi lễ thành hôn của chúng tôi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.variable} ${dancingScript.variable} ${greatVibes.variable} antialiased`}
      >
        <Background type="hearts" />
        {children}
      </body>
    </html>
  );
}
