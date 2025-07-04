import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Thai } from 'next/font/google';
import "./globals.css";

const noto_sans = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

const noto_sans_th = Noto_Sans_Thai({
  weight: ['400', '700'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
});

export const metadata: Metadata = {
  title: "Virtual School Online",
  description: "Virtual School Online เป็นระบบการเรียนการสอนโดยระบบออนไลน์ ที่สามารถเรียนคู่ขนานไปกับการเรียนแบบปกติ โดยสามารถเรียนรู้ด้วยตัวตนเอง เนื้อหาสอดคล้องกับหลักสูตรแกนกลางการศึกษาพื้นฐาน.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${noto_sans_th.variable} ${noto_sans.className} ${noto_sans_th.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
