'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Star } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#120508] text-white pt-24 pb-20">
      {/* ── Immersive Cinematic Background with Luxury Atmospheric Overlay ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
          alt="Royal Banquet Table Setting"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.1]"
        />

        {/* Multi-stage velvety maroon & obsidian gradients for deep immersion */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F0A0E]/90 via-[#1A070B]/75 to-[#120508]/95" />
        <div className="absolute inset-0 bg-radial-gradient from-gold/[0.08] via-transparent to-transparent pointer-events-none" />

        {/* Ambient warm light flares */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* ── Central Editorial Content Stage ── */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
        {/* Eyebrow Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold tracking-[0.25em] text-[11px] font-semibold uppercase">
            Royal Event Gastronomy • Since 2008
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        </motion.div>

        {/* Masterpiece Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.06] tracking-tight max-w-5xl mx-auto mb-8 font-normal"
        >
          The Art of <span className="italic text-gold">Royal Feasts</span>, <br />
          Curated for Your <span className="italic text-gold">Celebration</span>
        </motion.h1>

        {/* Poised, Unhurried Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#D1C7BD] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light mb-10"
        >
          From lavish traditional wedding Sadyas served on plantain leaves to slow-cooked Malabar
          Biryanis and VIP banquets — crafting unforgettable culinary memories across Kerala.
        </motion.p>

        {/* Minimalist Luxury CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 w-full sm:w-auto"
        >
          {/* Primary Gold Pill CTA */}
          <Link
            href="https://wa.me/919947106577"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E5C378] hover:bg-gold text-[#220B10] px-9 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(229,195,120,0.25)] active:scale-95"
          >
            <span>Plan Your Celebration</span>
            <ArrowRight size={15} />
          </Link>

          {/* Secondary Translucent Frosted Pill CTA */}
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-gold/50 px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <span>Explore Royal Menu</span>
          </Link>
        </motion.div>

        {/* Social Proof Star Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-16 text-white/80 text-xs"
        >
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="var(--color-gold)" className="text-gold" />
            ))}
          </div>
          <span className="font-semibold text-white ml-1">4.98 / 5</span>
          <span className="text-white/40">•</span>
          <span className="text-white/70">Trusted for 500+ Premier Celebrations in Central Kerala</span>
        </motion.div>

        {/* ── Serene Horizon Metrics Divider ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-4xl pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              500<span className="text-gold font-light">+</span>
            </p>
            <p className="text-xs font-serif italic text-gold font-medium">Grand Banquets</p>
            <p className="text-[11px] text-white/50 font-light">Weddings & High-Profile Galas</p>
          </div>

          <div className="space-y-1 sm:border-x sm:border-white/10 sm:px-6">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              50,000<span className="text-gold font-light">+</span>
            </p>
            <p className="text-xs font-serif italic text-gold font-medium">Delighted Guests</p>
            <p className="text-[11px] text-white/50 font-light">Across Pathanamthitta & Kerala</p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              15<span className="text-gold font-light">+</span> Yrs
            </p>
            <p className="text-xs font-serif italic text-gold font-medium">Heritage Mastery</p>
            <p className="text-[11px] text-white/50 font-light">Authentic Hand-Ground Spices</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
