'use client';

import React from 'react';
import Link from 'next/link';
import { Home, UtensilsCrossed, Image as ImageIcon, Mail, ShoppingBag } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useCartStore } from '@/lib/cart-store';

const navItems = [
  { label: 'Home', icon: Home, href: '/' },
  { label: 'Menu', icon: UtensilsCrossed, href: '/menu' },
  { label: 'Cart', icon: ShoppingBag, href: '/cart' },
  { label: 'Gallery', icon: ImageIcon, href: '/gallery' },
  { label: 'Contact', icon: Mail, href: '/contact' },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCartStore();
  const cartCount = totalItems();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-md md:hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white/95 backdrop-blur-2xl border border-gray-200 rounded-[32px] py-4 px-5 shadow-[0_8px_40px_rgba(0,0,0,0.10)] flex items-center justify-between"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const isCart = item.href === '/cart';

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center gap-1.5 transition-all duration-300 relative',
                isActive ? 'text-maroon' : 'text-gray-400'
              )}
            >
              <motion.div
                animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative"
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                {/* Cart badge */}
                <AnimatePresence>
                  {isCart && cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-maroon text-white text-[9px] font-black rounded-full flex items-center justify-center"
                    >
                      {cartCount > 9 ? '9+' : cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
              <span
                className={cn(
                  'text-[9px] font-bold uppercase tracking-widest transition-all',
                  isActive ? 'opacity-100' : 'opacity-60'
                )}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2.5 w-1 h-1 rounded-full bg-maroon shadow-[0_0_12px_var(--color-maroon)]"
                />
              )}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
