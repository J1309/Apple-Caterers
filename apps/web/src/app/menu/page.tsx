'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import Link from 'next/link';

const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

const menuItems = [
  {
    id: 1,
    name: 'Fish Cutlet',
    priceNum: 180,
    category: 'Starters',
    description:
      'Crispy Kerala-style fried fish cutlets made with spiced mashed fish and breadcrumbs.',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Unnakaya',
    priceNum: 150,
    category: 'Starters',
    description:
      'Traditional stuffed banana fritters filled with sweetened coconut, egg and spices.',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Pappadam & Chutneys',
    priceNum: 80,
    category: 'Starters',
    description: 'Crispy golden pappadam served with fresh coconut chutney and mango pickle.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Kerala Fish Curry',
    priceNum: 320,
    category: 'Main Course',
    description: 'Authentic Kerala red fish curry slow-cooked in raw mango and coconut milk gravy.',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop',
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Malabar Biryani',
    priceNum: 380,
    category: 'Main Course',
    description:
      'Fragrant Malabar-style biryani layered with spiced meat, caramelised onions and saffron rice.',
    image:
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Appam with Chicken Stew',
    priceNum: 280,
    category: 'Main Course',
    description:
      'Soft lacy hoppers paired with a creamy coconut milk chicken stew infused with whole spices.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Kerala Prawn Masala',
    priceNum: 420,
    category: 'Main Course',
    description: 'Juicy tiger prawns cooked in a bold coconut and spice masala with curry leaves.',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 8,
    name: 'Palada Payasam',
    priceNum: 120,
    category: 'Desserts',
    description: 'Creamy Kerala rice pudding made with ada, milk and cardamom — a festive classic.',
    image:
      'https://images.unsplash.com/photo-1571167366136-d0e92e9f0c78?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 9,
    name: 'Pazham Halwa',
    priceNum: 100,
    category: 'Desserts',
    description: 'Rich Kerala banana halwa slow-cooked with ghee, jaggery and fresh coconut.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 10,
    name: 'Sambharam',
    priceNum: 60,
    category: 'Beverages',
    description:
      'Traditional Kerala spiced buttermilk with ginger, green chilli and curry leaves — perfectly refreshing.',
    image:
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
  },
  {
    id: 11,
    name: 'Fresh Tender Coconut',
    priceNum: 80,
    category: 'Beverages',
    description: "Fresh young coconut water served chilled — Kerala's most natural refresher.",
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const { addItem, items, totalItems, updateQuantity } = useCartStore();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const getCartItem = (id: number) => items.find((i) => i.id === id);

  const handleAdd = (item: (typeof menuItems)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: String(item.priceNum),
      priceNum: item.priceNum,
      category: item.category,
      image: item.image,
    });
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => setAddedIds((prev) => prev.filter((id) => id !== item.id)), 1500);
  };

  const cartCount = totalItems();

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm"
          >
            Authentic Kerala Cuisine
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-gray-900"
          >
            Our Catering <span className="italic text-[#D4AF37]">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm max-w-md mx-auto"
          >
            Add your favourite dishes to the cart, then confirm your event details to send us an
            enquiry.
          </motion.p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-[0_4px_16px_rgba(212,175,55,0.3)]'
                  : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={`skeleton-${i}`} className="space-y-4">
                    <Skeleton className="h-[260px] w-full rounded-3xl" />
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))
              : filteredItems.map((item) => {
                  const cartItem = getCartItem(item.id);
                  const isAdded = addedIds.includes(item.id);

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="group bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-500 flex flex-col h-full"
                    >
                      <div className="relative h-[260px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {cartItem && (
                          <div className="absolute top-5 left-5 bg-[#D4AF37] text-black text-xs font-black px-3 py-1 rounded-full">
                            ×{cartItem.quantity} in cart
                          </div>
                        )}
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star size={12} fill="#D4AF37" className="text-[#D4AF37]" />
                            <span className="text-xs font-bold text-gray-500">{item.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-serif text-gray-900 mb-3">{item.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow italic font-light">
                          {item.description}
                        </p>

                        {/* Cart Controls */}
                        {cartItem ? (
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                              className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all border border-gray-200"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="flex-1 text-center text-gray-900 font-bold text-lg">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                              className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center transition-all border border-[#D4AF37]/20"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        ) : (
                          <motion.button
                            onClick={() => handleAdd(item)}
                            whileTap={{ scale: 0.97 }}
                            className={`w-full py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 border ${
                              isAdded
                                ? 'bg-green-50 border-green-200 text-green-600'
                                : 'bg-gray-50 hover:bg-[#D4AF37] hover:text-black text-gray-700 border-gray-200 hover:border-[#D4AF37]'
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check size={16} />
                                Added!
                              </>
                            ) : (
                              <>
                                <Plus size={16} />
                                Add to Cart
                              </>
                            )}
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Cart Button */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-50"
          >
            <Link
              href="/cart"
              className="flex items-center gap-4 bg-[#D4AF37] text-black px-8 py-4 rounded-full shadow-[0_8px_40px_rgba(212,175,55,0.45)] hover:scale-105 transition-transform font-black text-sm uppercase tracking-wider"
            >
              <div className="relative">
                <ShoppingBag size={22} />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-[#D4AF37] text-[10px] font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
              View Cart & Enquire
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
