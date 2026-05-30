'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '@/lib/cart-store';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCartStore();
  const cartCount = totalItems();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm h-16">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-gray-900 group-hover:text-[#D4AF37] transition-colors">
            APPLE<span className="text-[#D4AF37]">CATERERS</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Home', href: '/' },
            { label: 'Menu', href: '/menu' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-widest uppercase text-gray-600 hover:text-[#D4AF37] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/cart"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 transition-all"
          >
            <ShoppingBag size={18} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#D4AF37] text-black text-[10px] font-black rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <Link
            href="https://wa.me/1234567890"
            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c49b2e] text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105"
          >
            <MessageSquare size={14} />
            Inquiry
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
          >
            {[
              { label: 'Home', href: '/' },
              { label: 'Menu', href: '/menu' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl font-serif text-gray-900 hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="flex items-center gap-2 text-2xl font-serif text-gray-900 hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
              {cartCount > 0 && (
                <span className="w-7 h-7 bg-[#D4AF37] text-black text-xs font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="https://wa.me/1234567890"
              className="mt-8 bg-[#D4AF37] text-black px-10 py-4 rounded-full font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WhatsApp Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
