'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
  name: string;
  phone: string;
  date: string;
  type: string;
  guests: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const message = encodeURIComponent(
      `🍽️ *NEW CONTACT ENQUIRY — Apple Caterers*\n\n` +
        `👤 *Name:* ${data.name}\n` +
        `📞 *Phone:* ${data.phone}\n` +
        `📅 *Event Date:* ${data.date}\n` +
        `🎉 *Event Type:* ${data.type}\n` +
        `👥 *Expected Guests:* ${data.guests}\n\n` +
        `💬 *Message:*\n${data.message}`
    );
    window.open(`https://wa.me/919947106577?text=${message}`, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    toast.success('WhatsApp enquiry opened. Send the message to complete your enquiry.');
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-maroon font-semibold tracking-widest uppercase text-sm"
              >
                Let's Collaborate
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-serif text-gray-900"
              >
                Start Your <br />
                <span className="italic text-gold">Culinary Story</span>
              </motion.h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                We're here to answer any questions and help you plan an unforgettable catering
                experience.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  content: '+91 99471 06577',
                  sub: 'Mon-Sat, 9am - 6pm',
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  content: 'hello@applecaterers.com',
                  sub: 'Response within 24 hours',
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  content: 'Poomkavu - Pathanamthitta Rd, Mallassery, Kerala 689646',
                  sub: 'By appointment only',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gold group-hover:bg-maroon group-hover:text-white transition-all">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-700">{item.content}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 flex gap-6">
              <Link
                href="https://wa.me/919947106577"
                className="flex items-center gap-3 text-gray-700 font-bold hover:text-maroon transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                Message on WhatsApp
              </Link>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-[40px] relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-maroon mx-auto shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-serif text-gray-900">Thank You!</h2>
                <p className="text-gray-500">
                  WhatsApp has opened with your enquiry details. Send the message there and our
                  team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold font-bold text-sm underline underline-offset-8"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Full Name
                    </label>
                    <input
                      {...register('name', { required: true })}
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-maroon transition-colors placeholder-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Phone Number
                    </label>
                    <input
                      {...register('phone', { required: true })}
                      placeholder="+91 99471 06577"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Event Date
                    </label>
                    <input
                      {...register('date', { required: true })}
                      type="date"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Event Type
                    </label>
                    <select
                      {...register('type', { required: true })}
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-maroon transition-colors appearance-none"
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Expected Guests
                  </label>
                  <input
                    {...register('guests', { required: true, min: 1 })}
                    type="number"
                    min="1"
                    placeholder="50"
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-maroon transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Your Message
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    placeholder="Tell us about your event..."
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:border-maroon transition-colors resize-none placeholder-gray-300"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-maroon hover:bg-white text-white hover:text-maroon py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
                  {!isSubmitting && <Send size={20} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
