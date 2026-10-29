'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John C Abraham',
    role: 'Verified Google Review',
    text: 'Food and services are so super,also mangment is excellent 🙏❤️🙏❤️🙏',
    rating: 5,
    initials: 'JA',
  },
  {
    name: 'JACK THOMAS',
    role: 'Verified Google Review',
    text: 'Best food and Service',
    rating: 5,
    initials: 'JT',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-maroon font-semibold tracking-widest uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 italic">
            Words From Our <span className="text-gold not-italic font-bold">Guests</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Real experiences from families and event hosts across Kerala
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 rounded-[32px] border border-gray-100 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-8 right-8 text-gold/15" size={48} />
              
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-gold)" className="text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 font-serif text-lg sm:text-xl italic leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>

              {/* Author & Badge */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon to-[#4a1820] text-gold font-bold flex items-center justify-center text-sm tracking-wider border-2 border-gold/40 shadow-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-base">{t.name}</h4>
                  <p className="text-maroon text-xs uppercase tracking-widest font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
