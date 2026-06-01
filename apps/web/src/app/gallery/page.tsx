'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Skeleton } from '@/components/ui/skeleton';
import { Maximize2, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Grand Wedding Buffet',
    category: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 2,
    title: 'Corporate Networking',
    category: 'Corporate',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 3,
    title: 'Outdoor Garden Party',
    category: 'Outdoor',
    image:
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Luxury Table Setting',
    category: 'Buffet',
    image:
      'https://images.unsplash.com/photo-1467453272184-d13ee39a4a7b?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Boutique Anniversary',
    category: 'Birthdays',
    image:
      'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=800&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 6,
    title: "Elegant Hors d'oeuvres",
    category: 'Buffet',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 7,
    title: 'Summer Cocktail Event',
    category: 'Corporate',
    image:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 8,
    title: 'Rustic Theme Setup',
    category: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
];

const categories = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Outdoor', 'Buffet'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryItems)[0]>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-maroon font-semibold tracking-widest uppercase text-sm">
            Visual Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900">
            Event <span className="italic text-gold">Galleries</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-maroon text-white border-maroon'
                  : 'bg-white border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={`skeleton-${i}`} className="w-full h-[400px] rounded-3xl" />
                ))
              : filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-md break-inside-avoid transition-all duration-300"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-serif">{item.title}</h3>
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Simple Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl shadow-gold/5"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <h2 className="text-white text-2xl font-serif">{selectedImage.title}</h2>
                <p className="text-gold uppercase tracking-widest text-xs mt-2">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
