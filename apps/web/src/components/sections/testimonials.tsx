'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexandra Wright',
    role: 'Bride',
    text: 'The food was absolutely divine! Our guests are still talking about the Wagyu sliders and the incredible presentation. The team made our wedding planning so much easier.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    text: "Professionalism at its peak. We've used Apple Caterers for three corporate events now, and they never fail to exceed our expectations. Exceptional service.",
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Sarah Johnson',
    role: 'Event Planner',
    text: 'As a professional planner, I need vendors I can rely on. Apple Caterers is my top choice for high-end events. Their attention to detail is unmatched.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-maroon font-semibold tracking-widest uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 italic">
            Words From Our <span className="text-gold not-italic font-bold">Guests</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative"
            >
              <Quote className="absolute top-8 right-8 text-gold/20" size={60} />
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-maroon"
                />
                <div>
                  <h4 className="text-gray-900 font-bold">{t.name}</h4>
                  <p className="text-maroon text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
