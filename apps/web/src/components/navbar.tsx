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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-maroon h-16">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.img
            src="/images/logo/company_logo.png"
            alt="Apple Caterers"
            className="h-8 md:h-10 object-contain"
            whileHover={{ rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
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
              className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-gold transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/cart"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
          >
            <ShoppingBag size={18} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gold text-maroon text-[10px] font-black rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <Link
            href="https://wa.me/919947106577"
            className="flex items-center gap-2 bg-gold hover:bg-[#c49b2e] text-maroon px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105"
          >
            <MessageSquare size={14} />
            Inquiry
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/80 p-2"
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
            className="md:hidden fixed inset-0 top-0 bg-maroon z-40 flex flex-col items-center justify-center gap-8"
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
                className="text-3xl font-serif text-white hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="flex items-center gap-2 text-2xl font-serif text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
              {cartCount > 0 && (
                <span className="w-7 h-7 bg-gold text-maroon text-xs font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="https://wa.me/919947106577"
              className="mt-8 bg-gold text-maroon px-10 py-4 rounded-full font-bold"
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
