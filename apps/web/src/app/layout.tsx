import React from 'react';
import type { Metadata } from 'next';
import './global.css';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { MobileBottomNav } from '@/components/mobile-bottom-nav';
import { Footer } from '@/components/footer';
import Loader from '@/components/loader';

export const metadata: Metadata = {
  title: 'Apple Caterers | Exquisite Culinary Experiences',
  description: 'High-end catering services for weddings, corporate events, and private gatherings.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-black text-white antialiased">
        <Loader />
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}
