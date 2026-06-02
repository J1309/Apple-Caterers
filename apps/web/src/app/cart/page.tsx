'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowLeft,
  Send,
  CheckCircle,
  User,
  MapPin,
  Calendar,
  Clock,
  Building2,
  Users,
  MessageSquare,
} from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import Link from 'next/link';

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Private Dinner',
  'Anniversary',
  'Outdoor Catering',
  'Cocktail Reception',
  'Other',
];

interface FormData {
  name: string;
  place: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  guestCount: string;
  message: string;
}

const emptyForm: FormData = {
  name: '',
  place: '',
  eventType: '',
  eventDate: '',
  eventTime: '',
  venue: '',
  guestCount: '',
  message: '',
};

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } = useCartStore();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cartCount = totalItems();

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.place.trim()) newErrors.place = 'Place is required';
    if (!form.eventType) newErrors.eventType = 'Please select an event type';
    if (!form.eventDate) newErrors.eventDate = 'Event date is required';
    if (!form.eventTime) newErrors.eventTime = 'Event time is required';
    if (!form.venue.trim()) newErrors.venue = 'Venue is required';
    if (!form.guestCount || isNaN(Number(form.guestCount)) || Number(form.guestCount) < 1)
      newErrors.guestCount = 'Please enter a valid guest count';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = (): string => {
    const itemLines = items.map((item) => `  • ${item.name} ×${item.quantity}`).join('\n');
    return encodeURIComponent(
      `🍽️ *NEW CATERING ENQUIRY — Apple Caterers*\n\n` +
        `👤 *Name:* ${form.name}\n` +
        `📍 *Place:* ${form.place}\n` +
        `🎉 *Event Type:* ${form.eventType}\n` +
        `📅 *Event Date:* ${form.eventDate}\n` +
        `⏰ *Event Time:* ${form.eventTime}\n` +
        `🏛️ *Venue:* ${form.venue}\n` +
        `👥 *Guest Count:* ${form.guestCount}\n\n` +
        `🛒 *Selected Dishes:*\n${itemLines}\n\n` +
        (form.message ? `💬 *Additional Notes:*\n${form.message}` : '')
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (items.length === 0) return;
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    const message = buildWhatsAppMessage();
    const waNumber = '919947106577';
    const waUrl = `https://wa.me/${waNumber}?text=${message}`;
    if (typeof window !== 'undefined') window.open(waUrl, '_blank');
    setSubmitted(true);
    clearCart();
    setIsSubmitting(false);
  };

  /* ── Success Screen ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-center space-y-8 max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-maroon/10 border-2 border-maroon flex items-center justify-center mx-auto"
          >
            <CheckCircle size={48} className="text-maroon" />
          </motion.div>
          <div className="space-y-3">
            <h2 className="text-3xl font-serif text-gray-900">Enquiry Sent!</h2>
            <p className="text-gray-500 leading-relaxed">
              Your enquiry has been sent to WhatsApp. Our team will get back to you shortly to
              confirm your booking.
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-maroon text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Back to Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  /* ── Empty Cart ── */
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 max-w-sm"
        >
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
            <ShoppingBag size={40} className="text-gray-300" />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-serif text-gray-900">Your cart is empty</h2>
            <p className="text-gray-400">
              Add some Kerala dishes from the menu to start your enquiry.
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-maroon text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform"
          >
            <ArrowLeft size={16} />
            Browse Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-32 md:pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-maroon text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Menu
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
            Your <span className="italic text-gold">Selection</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Review your items, then fill in your event details to send us an enquiry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
          {/* ── LEFT: Cart Items + Form ── */}
          <div className="space-y-10">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-gray-900 flex items-center gap-3">
                  <ShoppingBag size={20} className="text-maroon" />
                  Selected Dishes
                  <span className="text-sm font-normal text-gray-400">({cartCount} items)</span>
                </h2>
                <button
                  onClick={clearCart}
                  className="text-xs text-gray-300 hover:text-red-400 transition-colors uppercase tracking-wider font-bold"
                >
                  Clear All
                </button>
              </div>

              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0 pt-1">
                        <p className="text-gray-900 font-semibold truncate text-sm sm:text-base">{item.name}</p>
                        <p className="text-maroon text-xs sm:text-sm font-bold">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-50 hover:bg-red-100 text-red-400 flex items-center justify-center transition-all shrink-0"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                    <div className="sm:hidden flex items-center justify-between mt-3 pt-3 border-t border-gray-200/60">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-all"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-gray-900 font-bold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-maroon/10 hover:bg-maroon/20 text-maroon flex items-center justify-center transition-all"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center justify-between mt-0">
                      <div className="flex-1"></div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-all"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-gray-900 font-bold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-maroon/10 hover:bg-maroon/20 text-maroon flex items-center justify-center transition-all"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Enquiry Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-8"
            >
              <h2 className="text-xl font-serif text-gray-900">Event Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    <User size={13} className="text-maroon" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Rahul Menon"
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-maroon transition-colors ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    <MapPin size={13} className="text-maroon" /> City / Place
                  </label>
                  <input
                    type="text"
                    value={form.place}
                    onChange={(e) => handleChange('place', e.target.value)}
                    placeholder="Pathanamthitta, Kerala"
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-maroon transition-colors ${errors.place ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.place && <p className="text-red-400 text-xs">{errors.place}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                  <Building2 size={13} className="text-maroon" /> Event Type
                </label>
                <div className="flex flex-wrap gap-3">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleChange('eventType', type)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                        form.eventType === type
                          ? 'bg-maroon border-maroon text-white shadow-[0_4px_12px_rgba(114,47,55,0.3)]'
                          : 'bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.eventType && <p className="text-red-400 text-xs">{errors.eventType}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    <Calendar size={13} className="text-maroon" /> Event Date
                  </label>
                  <input
                    type="date"
                    value={form.eventDate}
                    onChange={(e) => handleChange('eventDate', e.target.value)}
                    style={{ colorScheme: 'light' }}
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 text-sm focus:outline-none focus:border-maroon transition-colors ${errors.eventDate ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.eventDate && <p className="text-red-400 text-xs">{errors.eventDate}</p>}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    <Clock size={13} className="text-maroon" /> Event Time
                  </label>
                  <input
                    type="time"
                    value={form.eventTime}
                    onChange={(e) => handleChange('eventTime', e.target.value)}
                    style={{ colorScheme: 'light' }}
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 text-sm focus:outline-none focus:border-maroon transition-colors ${errors.eventTime ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.eventTime && <p className="text-red-400 text-xs">{errors.eventTime}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    <Building2 size={13} className="text-maroon" /> Venue / Address
                  </label>
                  <input
                    type="text"
                    value={form.venue}
                    onChange={(e) => handleChange('venue', e.target.value)}
                    placeholder="Venue name, Mallassery"
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-maroon transition-colors ${errors.venue ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.venue && <p className="text-red-400 text-xs">{errors.venue}</p>}
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                    <Users size={13} className="text-maroon" /> Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={form.guestCount}
                    onChange={(e) => handleChange('guestCount', e.target.value)}
                    placeholder="e.g. 150"
                    className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-maroon transition-colors ${errors.guestCount ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.guestCount && <p className="text-red-400 text-xs">{errors.guestCount}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-semibold">
                  <MessageSquare size={13} className="text-maroon" />
                  Additional Notes
                  <span className="text-gray-300 normal-case tracking-normal text-xs">
                    (optional)
                  </span>
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Any dietary requirements, special requests, or additional information…"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-sm placeholder-gray-300 focus:outline-none focus:border-maroon transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-maroon hover:bg-[#5a1f28] text-white py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(114,47,55,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      style={{ animation: 'spin 1s linear infinite' }}
                      height="16"
                      width="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        style={{ opacity: 0.25 }}
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        style={{ opacity: 0.75 }}
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending Enquiry…
                  </span>
                ) : (
                  <>
                    <Send size={16} /> Send Enquiry via WhatsApp
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>

          {/* ── RIGHT: Order Summary ── */}
          <div className="lg:sticky lg:top-28 self-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 space-y-6"
            >
              <h2 className="text-xl font-serif text-gray-900">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex-1 truncate pr-4">
                      {item.name}
                      <span className="text-gray-400"> ×{item.quantity}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-gray-400 text-xs leading-relaxed">
                  Pricing will be confirmed by our team based on guest count and service
                  requirements.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-3">
                {[
                  '✦ No commitment until confirmed',
                  '✦ Flexible menu customisation',
                  '✦ Response within 24 hours',
                ].map((point) => (
                  <p key={point} className="text-gray-400 text-xs">
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
