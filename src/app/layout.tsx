import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
