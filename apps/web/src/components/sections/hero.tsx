'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Star,
  ChefHat,
  Users,
  Award,
  CheckCircle2,
  UtensilsCrossed,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

interface CulinaryExperience {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
}

const culinaryExperiences: CulinaryExperience[] = [
  {
    id: 'sadya',
    title: 'Grand Kerala Sadya',
    subtitle: 'Heritage Feast on Fresh Plantain Leaves',
    tag: 'Traditional Festive',
    badge: '24 Authentic Dishes',
    description: 'Slow-simmered Parippu, aromatic Sambar, Avial, Thoran, and duo Payasams prepared according to centuries-old Central Travancore recipes.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Pure Ghee Sambar', 'Adapradhaman', 'Fresh Plantain Plating'],
  },
  {
    id: 'biryani',
    title: 'Royal Malabar Dum Biryani',
    subtitle: 'Slow-Cooked with Saffron & Malabar Spices',
    tag: 'Celebration Special',
    badge: 'Khaima Rice Dum',
    description: 'Succulent tender meat infused with fried onions, cashews, raisins, and hand-ground spices, sealed and cooked on live dum embers.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Kaima Rice Grain', 'Live Raita & Chutneys', 'Date Pickle'],
  },
  {
    id: 'seafood',
    title: 'Coastal Seafood & Live Tawa',
    subtitle: 'Kerala Karimeen & Neymeen Delicacies',
    tag: 'Chef Signature',
    badge: 'Fresh Daily Catch',
    description: 'Banana-leaf wrapped Meen Pollichathu, crispy Kerala Karimeen Fry, and spicy coconut milk Fish Molly cooked to order.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Pearl Spot (Karimeen)', 'Coconut Milk Gravy', 'Live Tawa Grills'],
  },
  {
    id: 'dessert',
    title: 'Artisanal Dessert & Payasam Bar',
    subtitle: 'Exquisite Sweets & Live Jilebi Counter',
    tag: 'Royal Finale',
    badge: 'Live Counter',
    description: 'Rich Pal Payasam, warm Jilebis fried before your guests, tender coconut puddings, and chilled Royal Falooda spreads.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Warm Live Jilebi', 'Tender Coconut Mousse', 'Nadan Payasams'],
  },
];

const stats = [
  {
    icon: ChefHat,
    value: '500+',
    label: 'Grand Banquets',
    detail: 'Weddings & Galas',
  },
  {
    icon: Users,
    value: '50k+',
    label: 'Guests Enchanted',
    detail: 'Across Kerala',
  },
  {
    icon: Award,
    value: '15+ Yrs',
    label: 'Heritage Mastery',
    detail: 'Since 2008',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Fresh Spices',
    detail: 'Farm-to-Banquet',
  },
];

export function Hero() {
  const [activeExp, setActiveExp] = useState<CulinaryExperience>(culinaryExperiences[0]);

  return (
    <section className="relative min-h-[92vh] bg-[#FCFAF7] flex items-center overflow-hidden pt-20 pb-16 md:py-24 border-b border-amber-900/5">
      {/* ── Atmospheric Glows & Textures ── */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-amber-200/25 via-gold/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-maroon/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-amber-100/30 to-rose-100/20 blur-[150px] pointer-events-none" />

      {/* Subtle Luxury Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #722F37 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ══════════════════════════════════════════════════════
              LEFT: Narrative & High-Impact Editorial Typography
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-maroon/10 via-amber-50 to-maroon/5 border border-maroon/20 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-maroon" />
              </span>
              <span className="text-maroon text-[11px] font-black uppercase tracking-[0.2em]">
                Est. 2008 • Royal Event Gastronomy
              </span>
              <span className="text-gold text-xs">✦</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif text-gray-900 leading-[1.05] tracking-tight">
                Crafting <span className="italic font-light text-gray-800">Unforgettable</span>
                <span className="block mt-1 font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#722F37] via-[#9B3644] to-gold">
                  Royal Celebrations
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-gray-700 font-normal">
                  Across Kerala.
                </span>
              </h1>
            </motion.div>

            {/* Subtext Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
            >
              From opulent multi-course wedding Sadyas served on fresh banana leaves to aromatic
              Malabar Dum Biryanis and bespoke corporate buffets — Apple Caterers crafts dining
              moments of uncompromising taste and royal hospitality.
            </motion.p>

            {/* Social Proof Rating */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-400/30 px-3.5 py-1 rounded-full">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-black text-amber-900 ml-1">4.98 / 5</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">
                Premier choice for <strong className="text-gray-900 font-bold">500+ weddings</strong> in Pathanamthitta, Kottayam & Central Kerala
              </p>
            </motion.div>

            {/* ── Nested CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary "Button-in-Button" */}
              <Link
                href="/menu"
                className="group relative inline-flex items-center justify-between gap-6 bg-maroon hover:bg-[#5a1f28] text-white pl-7 pr-3 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 shadow-[0_8px_30px_rgba(114,47,55,0.3)] hover:shadow-[0_12px_40px_rgba(114,47,55,0.4)] active:scale-[0.98]"
              >
                <span>Explore Royal Menu</span>
                <span className="w-9 h-9 rounded-full bg-gold/90 text-maroon flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>

              {/* Secondary VIP Concierge Button */}
              <Link
                href="https://wa.me/919947106577"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-amber-50/50 text-gray-800 hover:text-maroon px-6 py-3.5 rounded-full text-xs font-bold tracking-wider border border-gray-200 hover:border-gold/60 transition-all duration-300 shadow-sm active:scale-[0.98]"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageSquare size={13} />
                </div>
                <span>Event Concierge</span>
                <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  ⚡ 5m Reply
                </span>
              </Link>
            </motion.div>

            {/* ── Metric Micro-Bar ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200/80"
            >
              {stats.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-maroon">
                    <item.icon size={15} />
                    <span className="text-lg font-serif font-black text-gray-900 tracking-tight">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-gray-700 leading-tight">{item.label}</p>
                  <p className="text-[10px] text-gray-400 font-light">{item.detail}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT: Double-Bezel Interactive Culinary Showcase
             ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            {/* Ambient Background Disc Behind Showcase */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-maroon/10 via-gold/15 to-transparent rounded-[3rem] blur-2xl -z-10" />

            {/* ── Outer Doppelrand Shell ── */}
            <div className="p-3 sm:p-4 rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-amber-900/10 shadow-[0_20px_60px_-15px_rgba(114,47,55,0.18)]">
              {/* Inner Core Display */}
              <div className="rounded-[calc(2.5rem-0.75rem)] overflow-hidden relative bg-black aspect-[4/3] sm:aspect-[16/11]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExp.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={activeExp.image}
                      alt={activeExp.title}
                      className="w-full h-full object-cover object-center brightness-[0.92]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Floating Pill */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-400/30 flex items-center gap-1.5">
                        <Sparkles size={11} className="text-amber-400" />
                        {activeExp.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-maroon text-[10px] font-bold shadow-sm">
                        {activeExp.badge}
                      </span>
                    </div>

                    {/* Bottom Dish Information */}
                    <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                        {activeExp.title}
                      </h3>
                      <p className="text-amber-200/90 text-xs font-medium">
                        {activeExp.subtitle}
                      </p>
                      <p className="text-gray-300 text-[11px] leading-relaxed line-clamp-2 font-light">
                        {activeExp.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {activeExp.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold bg-white/15 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full"
                          >
                            <CheckCircle2 size={10} className="text-amber-400" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── Interactive Dish Switcher Tabs ── */}
              <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {culinaryExperiences.map((exp) => {
                  const isActive = activeExp.id === exp.id;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => setActiveExp(exp)}
                      className={`p-2 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                        isActive
                          ? 'bg-maroon text-white border-maroon shadow-md scale-[1.02]'
                          : 'bg-gray-50/80 hover:bg-amber-50/50 text-gray-700 border-gray-200/70 hover:border-gold/40'
                      }`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-wider block opacity-75">
                        {exp.id === 'sadya' && '🌿 Sadya'}
                        {exp.id === 'biryani' && '🍚 Biryani'}
                        {exp.id === 'seafood' && '🐟 Seafood'}
                        {exp.id === 'dessert' && '🍮 Payasam'}
                      </span>
                      <span
                        className={`text-xs font-bold truncate block mt-0.5 ${
                          isActive ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {exp.title.replace('Grand Kerala ', '').replace('Royal Malabar ', '')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Floating Holographic Live Availability Badge ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-amber-900/10 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon to-[#9B3644] text-gold flex items-center justify-center shrink-0 shadow-sm">
                <UtensilsCrossed size={18} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-bold text-gray-900">Custom Tasting Available</p>
                </div>
                <p className="text-[10px] text-gray-500 font-medium">
                  Sample menus before confirming your banquet
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
