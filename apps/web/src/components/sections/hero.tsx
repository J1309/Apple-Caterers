'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Star } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-white flex items-center overflow-hidden pt-20 pb-20 md:py-28">
      {/* Subtle ambient lighting flares */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gold/[0.04] rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-maroon/[0.03] rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      {/* Micro grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #722F37 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Minimalist Editorial Content ── */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Minimal Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-maroon font-semibold tracking-widest uppercase text-xs sm:text-sm">
                Authentic Kerala Cuisine
              </span>
            </motion.div>

            {/* Headline matching website's font-serif & gold italic DNA */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-serif text-gray-900 leading-[1.08] tracking-tight"
            >
              The Taste of <span className="italic text-gold">Kerala</span>, <br />
              Elevated for Your <span className="italic text-gold">Event</span>
            </motion.h1>

            {/* Narrative Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-xl font-light"
            >
              Bespoke catering crafted with heritage recipes, hand-ground spices, and immaculate
              presentation. From grand wedding Sadyas to celebratory evening banquets across Kerala.
            </motion.p>

            {/* Rating pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--color-gold)" className="text-gold" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                <span className="text-gray-900 font-bold">4.9 / 5</span> — from 500+ premier celebrations
              </p>
            </motion.div>

            {/* Minimalist CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-2 bg-maroon hover:bg-[#5a1f28] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(114,47,55,0.25)]"
              >
                <span>Explore Menu</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/919947106577"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 text-gray-700 hover:text-maroon font-semibold text-sm transition-colors py-3 sm:px-2"
              >
                <div className="w-10 h-10 rounded-full border border-gray-200 group-hover:border-maroon group-hover:bg-maroon/5 flex items-center justify-center transition-all">
                  <MessageSquare size={16} />
                </div>
                <span>WhatsApp Us</span>
              </Link>
            </motion.div>

            {/* Minimalist Stats Divider */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 max-w-lg"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">500+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Events Catered</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">50k+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Happy Guests</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">15+ Yrs</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Culinary Mastery</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Cinematic Minimalist Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative mt-4 lg:mt-0"
          >
            {/* Soft backdrop glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/10 to-maroon/5 rounded-[3rem] blur-2xl -z-10" />

            {/* Main Showcase Image Frame */}
            <div className="relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop"
                alt="Kerala Traditional Sadya Banquet"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Minimal caption on image bottom */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  Grand Sadya Feast
                </p>
                <p className="text-base sm:text-lg font-serif italic text-white/95">
                  Heritage Flavours on Fresh Plantain Leaves
                </p>
              </div>
            </div>

            {/* Floating Minimalist Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-4 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3.5 hidden sm:flex text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-gold flex items-center justify-center shrink-0">
                <Star size={18} fill="var(--color-gold)" className="text-gold" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Premier Kerala Catering</p>
                <p className="text-[11px] text-gray-400">Weddings • Corporate • Private Galas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
