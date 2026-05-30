'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Star, ChefHat, Users, Award } from 'lucide-react';
import Link from 'next/link';

const floatingCards = [
  {
    label: 'Malabar Biryani',
    tag: 'Most Loved',
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&auto=format&fit=crop',
  },
  {
    label: 'Kerala Sadya',
    tag: 'Traditional',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop',
  },
  {
    label: 'Fish Curry',
    tag: "Chef's Pick",
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400&auto=format&fit=crop',
  },
];

const stats = [
  { icon: ChefHat, value: '200+', label: 'Events Catered' },
  { icon: Users, value: '50k+', label: 'Happy Guests' },
  { icon: Award, value: '15+', label: 'Years of Excellence' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden pt-16">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/6 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/60 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Subtle dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 md:py-24">
          {/* ── LEFT: Text Content ── */}
          <div className="space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-5 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[#b8962e] text-xs font-bold uppercase tracking-widest">
                Authentic Kerala Cuisine
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.08] tracking-tight"
            >
              The Taste of <span className="italic text-[#D4AF37]">Kerala</span>
              <br />
              at Your Event
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed max-w-lg"
            >
              Apple Caterers brings the rich flavours of Kerala — from festive Sadya spreads to
              aromatic Malabar Biryani — straight to your wedding, corporate event, or celebration.
            </motion.p>

            {/* Star Rating Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-3"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="#D4AF37" className="text-[#D4AF37]" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                <span className="text-gray-900 font-bold">4.9 / 5</span> — from 200+ events across
                Kerala
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                href="/menu"
                className="group flex items-center gap-2 bg-gray-900 hover:bg-[#D4AF37] text-white hover:text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-sm"
              >
                Explore Menu
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://wa.me/1234567890"
                className="group flex items-center gap-3 text-gray-700 hover:text-[#D4AF37] font-semibold transition-colors"
              >
                <div className="w-11 h-11 rounded-full border-2 border-gray-200 group-hover:border-[#D4AF37] flex items-center justify-center transition-all">
                  <MessageSquare size={18} />
                </div>
                WhatsApp Us
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-8 pt-4 border-t border-gray-100"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <stat.icon size={16} className="text-[#D4AF37] shrink-0" />
                  <div>
                    <p className="text-gray-900 font-bold text-base leading-none">{stat.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Floating Food Cards ── */}
          <div className="relative h-[520px] hidden lg:block">
            {/* Card 1 — top left */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              style={{ animation: 'float1 6s ease-in-out infinite' }}
              className="absolute top-0 left-0 w-52 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              <img
                src={floatingCards[0].image}
                alt={floatingCards[0].label}
                className="w-full h-40 object-cover"
              />
              <div className="bg-white p-4">
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                  {floatingCards[0].tag}
                </span>
                <p className="text-gray-900 font-serif text-sm mt-0.5">{floatingCards[0].label}</p>
              </div>
            </motion.div>

            {/* Card 2 — center right (big) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              style={{ animation: 'float2 7s ease-in-out infinite' }}
              className="absolute top-16 right-0 w-64 rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <img
                src={floatingCards[1].image}
                alt={floatingCards[1].label}
                className="w-full h-52 object-cover"
              />
              <div className="bg-white p-5">
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                  {floatingCards[1].tag}
                </span>
                <p className="text-gray-900 font-serif text-base mt-0.5">
                  {floatingCards[1].label}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={11} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                  <span className="text-gray-400 text-xs ml-1">5.0</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3 — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              style={{ animation: 'float3 8s ease-in-out infinite' }}
              className="absolute bottom-0 left-8 w-56 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              <img
                src={floatingCards[2].image}
                alt={floatingCards[2].label}
                className="w-full h-40 object-cover"
              />
              <div className="bg-white p-4">
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                  {floatingCards[2].tag}
                </span>
                <p className="text-gray-900 font-serif text-sm mt-0.5">{floatingCards[2].label}</p>
              </div>
            </motion.div>

            {/* Decorative gold ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-dashed border-[#D4AF37]/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-[#D4AF37]/5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Keyframe animations for the floating cards */}
      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
