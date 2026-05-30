'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Briefcase, PartyPopper, Tent } from 'lucide-react';

const services = [
  {
    title: 'Weddings',
    description:
      'Creating magical moments with sophisticated menus and elegant presentation for your special day.',
    icon: Heart,
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Corporate Events',
    description:
      'Professional catering that leaves a lasting impression on your clients and colleagues.',
    icon: Briefcase,
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Birthdays',
    description: 'Fun, vibrant, and delicious catering for birthday celebrations of all ages.',
    icon: PartyPopper,
    image:
      'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Outdoor Events',
    description:
      'Fresh, flavorful menus perfectly suited for garden parties and outdoor festivities.',
    icon: Tent,
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Bespoke Catering <span className="italic text-[#D4AF37]">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-black mb-6 transform transition-transform group-hover:rotate-12">
                  <service.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed transform transition-all duration-300 group-hover:text-white">
                  {service.description}
                </p>
                <div className="mt-6 h-1 w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
