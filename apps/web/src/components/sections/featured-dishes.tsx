'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Clock } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: 'Kerala Sadya',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
    category: 'Traditional',
    rating: 5.0,
    time: '30 min',
  },
  {
    id: 2,
    name: 'Kerala Fish Curry',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
    category: 'Main Course',
    rating: 4.9,
    time: '25 min',
  },
  {
    id: 3,
    name: 'Malabar Biryani',
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    category: 'Main Course',
    rating: 4.8,
    time: '40 min',
  },
];

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">
              Culinary Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              Our Signature <span className="italic text-[#D4AF37]">Creations</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm">
            Authentic Kerala dishes crafted with traditional recipes and the finest local
            ingredients, designed to delight your guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:border-[#D4AF37]/30 hover:shadow-md transition-all duration-500"
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
                    {dish.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-4">{dish.name}</h3>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                    <span>{dish.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock size={14} />
                    <span>{dish.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
