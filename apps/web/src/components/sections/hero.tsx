'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative bg-[#FAF7F2] text-gray-900 overflow-hidden pt-16">
      {/* ════════════════════════════════════════════════════════════════
          TOP HALF: Dark Brand Block (Left) + Curved Banquet Photo (Right)
         ════════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] lg:min-h-[620px]">
        {/* ── Left Dark Maroon Block ── */}
        <div className="lg:col-span-5 bg-[#5a1f28] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10">
          {/* Subtle warm glow behind text */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Rotating Circular Seal Badge */}
          <div className="mb-8">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-[spin_20s_linear_infinite]"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.2px] tracking-[0.24em] uppercase fill-white/80 font-medium">
                  <textPath href="#circlePath">
                    ✦ EXQUISITE CATERING SERVICES •
                  </textPath>
                </text>
              </svg>
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
              </div>
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="space-y-6 my-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-[54px] xl:text-6xl font-serif text-white leading-[1.08] tracking-tight"
            >
              The Best Events <br />
              <span className="italic text-gold">Start Here</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md font-light"
            >
              Quality Ingredients. Heritage Recipes. Genuine Hospitality.
            </motion.p>

            {/* Pill CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-2"
            >
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 bg-[#E5C378] hover:bg-gold text-[#3A141A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-md active:scale-95"
              >
                <span>Get A Quote</span>
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* Bottom spacing anchor */}
          <div className="hidden lg:block h-6" />
        </div>

        {/* ── Right Large Curved Image Container ── */}
        <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full bg-white">
          <div className="w-full h-full lg:rounded-bl-[5rem] overflow-hidden relative shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury Banquet Table Setting"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle soft gradient over image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Ambient luxury caption */}
            <div className="absolute bottom-8 right-8 text-right text-white hidden sm:block">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                Bespoke Banquets
              </span>
              <span className="text-lg font-serif italic text-white/90">
                Weddings • Galas • VIP Receptions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          BOTTOM HALF: Stats with Overlapping Plate (Left) + Testimonial (Right)
         ════════════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 relative">
        {/* ── Lower Left Block: Stats & Overlapping Plate ── */}
        <div className="lg:col-span-5 bg-[#5a1f28] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-center">
          {/* Subtle Decorative Wave Contours */}
          <svg
            viewBox="0 0 500 200"
            fill="none"
            className="absolute -bottom-10 left-0 w-full opacity-15 pointer-events-none"
          >
            <path
              d="M0,100 C150,180 350,20 500,100 L500,200 L0,200 Z"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <path
              d="M0,130 C180,200 320,50 500,120 L500,200 L0,200 Z"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </svg>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-8 relative z-10 pl-0 sm:pl-4">
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                15<span className="text-gold font-light">+</span>
              </p>
              <p className="text-xs font-serif italic text-gold font-medium">years experience</p>
              <p className="text-[11px] text-white/60 font-light">among executive culinary team</p>
            </div>

            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                500<span className="text-gold font-light">+</span>
              </p>
              <p className="text-xs font-serif italic text-gold font-medium">events each year</p>
              <p className="text-[11px] text-white/60 font-light">across 15+ premier venues</p>
            </div>
          </div>
        </div>

        {/* ── Lower Right Block: Warm Cream Testimonial ── */}
        <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          {/* Decorative Giant Quotation Mark */}
          <span className="absolute top-6 right-10 text-8xl lg:text-9xl font-serif text-amber-900/[0.07] select-none pointer-events-none leading-none">
            “
          </span>

          <div className="max-w-xl relative z-10 space-y-6">
            {/* Client Badge */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-maroon/10 flex items-center justify-center">
                <Star size={12} fill="var(--color-gold)" className="text-gold" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-maroon">
                Client Review
              </span>
            </div>

            {/* Testimonial Quote in Website Font-Serif */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-900 leading-snug tracking-tight">
              “The food was brilliant, Apple Caterers made everything so effortless that we can't
              wait to use them again.”
            </blockquote>

            {/* Author Credit */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Dr. Thomas Kurian
                </p>
                <p className="text-[11px] text-gray-500 font-light">
                  Host, Grand Wedding Reception, Kottayam
                </p>
              </div>

              {/* Carousel Pagination Indicator Dots */}
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="w-2.5 h-2.5 rounded-full border border-gray-400" />
                <span className="w-2.5 h-2.5 rounded-full border border-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Overlapping Gourmet Plate (Breaking Out on Bottom-Left) ── */}
        <div className="hidden lg:block absolute -bottom-16 left-0 -translate-x-1/4 z-20 w-44 h-44 xl:w-52 xl:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
            alt="Artisanal Plated Culinary Dish"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
