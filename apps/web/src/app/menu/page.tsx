'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Skeleton } from '@/components/ui/skeleton';
import { Plus, Minus, ShoppingBag, Check, Utensils, LayoutGrid, ChevronLeft, ChevronRight, Search, Sparkles, PackageCheck } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { menuItems, categories, CATEGORY_MAP, curatedPackages, CuratedPackage } from '@/data/menu-items';
import Link from 'next/link';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const [importedPkgId, setImportedPkgId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -260 : 260, behavior: 'smooth' });
  };

  const { addItem, items, totalItems, updateQuantity } = useCartStore();

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary =
      dietaryFilter === 'all' ||
      (dietaryFilter === 'veg' && item.isVeg) ||
      (dietaryFilter === 'non-veg' && !item.isVeg);

    return matchesCategory && matchesSearch && matchesDietary;
  });

  const getCartItem = (id: number) => items.find((i) => i.id === id);

  const handleAdd = (item: (typeof menuItems)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      category: item.category,
      image: item.image,
    });
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => setAddedIds((prev) => prev.filter((id) => id !== item.id)), 1500);
  };

  const handleImportPackage = (pkg: CuratedPackage) => {
    pkg.itemIds.forEach((id) => {
      const item = menuItems.find((m) => m.id === id);
      if (item) {
        addItem({
          id: item.id,
          name: item.name,
          category: item.category,
          image: item.image,
        });
      }
    });
    setImportedPkgId(pkg.id);
    setTimeout(() => setImportedPkgId(null), 2000);
  };

  const cartCount = totalItems();

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-maroon font-semibold tracking-widest uppercase text-sm"
          >
            Authentic Kerala Cuisine
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-gray-900"
          >
            Our Catering <span className="italic text-gold">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm max-w-md mx-auto"
          >
            Explore 150+ dishes or choose a pre-curated event package for instant cart setup.
          </motion.p>
        </div>

        {/* 🌟 Curated Event Packages Section */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-amber-500" size={20} />
            <h2 className="text-xl md:text-2xl font-serif text-gray-900 font-bold">Curated Event Packages</h2>
            <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full ml-auto">
              1-Click Instant Import
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {curatedPackages.map((pkg) => {
              const isImported = importedPkgId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-5 border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{pkg.icon}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-maroon/10 text-maroon">
                        {pkg.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
                    <p className="text-xs text-maroon font-medium mb-2">{pkg.tagline}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{pkg.description}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg text-center mb-3">
                      Est: <span className="text-maroon font-bold">{pkg.estimatedPriceRange}</span>
                    </div>
                    <button
                      onClick={() => handleImportPackage(pkg)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                        isImported
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'bg-maroon hover:bg-maroon/90 text-white border-maroon'
                      }`}
                    >
                      {isImported ? (
                        <>
                          <PackageCheck size={16} />
                          Package Imported!
                        </>
                      ) : (
                        <>
                          <Plus size={16} />
                          Add {pkg.itemIds.length} Items to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔎 Search Bar & Dietary Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 bg-gray-50 p-4 rounded-2xl border border-gray-200">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search dishes (e.g. Biriyani, Appam, Chicken...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:border-maroon focus:outline-none text-sm text-gray-800 bg-white"
            />
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                dietaryFilter === 'all'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-emerald-700 border-emerald-200 hover:border-emerald-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Veg Only
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 ${
                dietaryFilter === 'non-veg'
                  ? 'bg-rose-600 text-white border-rose-600'
                  : 'bg-white text-rose-700 border-rose-200 hover:border-rose-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Non-Veg Only
            </button>
          </div>
        </div>

        {/* Categories Bar - horizontal scroll */}
        <div className="relative mb-12">
          {canScrollLeft && (
            <>
              <div className="absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <button
                onClick={() => scrollBy('left')}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-maroon hover:bg-gray-50 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
            </>
          )}
          {canScrollRight && (
            <>
              <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <button
                onClick={() => scrollBy('right')}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-maroon hover:bg-gray-50 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
          <div ref={scrollRef} className="overflow-x-auto pb-2 scrollbar-maroon">
            <div className="flex gap-3">
              {categories.map((cat) => {
                const isAll = cat === 'All';
                const info = !isAll ? CATEGORY_MAP[cat as keyof typeof CATEGORY_MAP] : null;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex flex-col items-center justify-center gap-2 min-w-[120px] h-[100px] rounded-2xl border transition-all duration-300 shrink-0 snap-start ${
                      activeCategory === cat
                        ? isAll
                          ? 'bg-maroon border-maroon text-white shadow-[0_4px_16px_rgba(114,47,55,0.3)]'
                          : `bg-gradient-to-br ${info?.gradient} text-white border-transparent shadow-lg`
                        : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {isAll ? (
                      <LayoutGrid size={22} className="shrink-0" />
                    ) : (
                      <span className="text-2xl">{info?.icon}</span>
                    )}
                    <span className="text-xs font-semibold text-center leading-tight max-w-[100px]">
                      {cat}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-medium text-gray-500">
            Showing <span className="font-bold text-gray-900">{filteredItems.length}</span> dishes
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={`skeleton-${i}`} className="space-y-4">
                    <Skeleton className="h-40 md:h-[200px] lg:h-[260px] w-full rounded-3xl" />
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
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="group bg-white rounded-2xl md:rounded-[32px] lg:rounded-[40px] border border-gray-100 shadow-sm overflow-hidden hover:border-maroon/40 hover:shadow-md transition-all duration-500 flex flex-col h-full"
                    >
                      <div className="relative h-40 md:h-[200px] lg:h-[260px] overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <Utensils size={32} className="text-gray-300" />
                          </div>
                        )}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold">
                          {item.isVeg ? (
                            <span className="text-emerald-700 flex items-center gap-1">🟢 Veg</span>
                          ) : (
                            <span className="text-rose-700 flex items-center gap-1">🔴 Non-Veg</span>
                          )}
                        </div>
                        {cartItem && (
                          <div className="absolute top-4 left-4 bg-maroon text-white text-xs font-black px-3 py-1 rounded-full">
                            ×{cartItem.quantity} in cart
                          </div>
                        )}
                      </div>

                      <div className="p-4 md:p-6 lg:p-8 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-maroon text-[10px] uppercase tracking-widest font-bold">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-serif text-gray-900 mb-3">{item.name}</h3>
                        {item.description ? (
                          <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow italic font-light">
                            {item.description}
                          </p>
                        ) : (
                          <div className="flex-grow" />
                        )}

                        {/* Cart Controls */}
                        {cartItem ? (
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                              className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all border border-gray-200"
                            >
                              <Minus size={14} className="md:size-4" />
                            </button>
                            <span className="flex-1 text-center text-gray-900 font-bold text-base md:text-lg">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                              className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-maroon/10 hover:bg-maroon/20 text-maroon flex items-center justify-center transition-all border border-maroon/20"
                            >
                              <Plus size={14} className="md:size-4" />
                            </button>
                          </div>
                        ) : (
                          <motion.button
                            onClick={() => handleAdd(item)}
                            whileTap={{ scale: 0.97 }}
                            className={`w-full py-3 md:py-4 rounded-2xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 border ${
                              isAdded
                                ? 'bg-green-50 border-green-200 text-green-600'
                                : 'bg-gray-50 hover:bg-maroon hover:text-white text-gray-700 border-gray-200 hover:border-maroon'
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
              className="flex items-center gap-4 bg-maroon text-white px-8 py-4 rounded-full shadow-[0_8px_40px_rgba(114,47,55,0.45)] hover:scale-105 transition-transform font-black text-sm uppercase tracking-wider"
            >
              <div className="relative">
                <ShoppingBag size={22} />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold text-maroon text-[10px] font-black rounded-full flex items-center justify-center">
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

