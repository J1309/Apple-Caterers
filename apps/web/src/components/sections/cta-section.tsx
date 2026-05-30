'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">
            Ready to Plan Your <br />
            <span className="italic text-[#D4AF37]">Next Event?</span>
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
            Contact us today for a bespoke proposal tailored to your vision. Let's create something
            extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 hover:bg-white flex items-center gap-2"
            >
              Get a Proposal
              <ArrowRight size={20} />
            </Link>

            <div className="flex items-center gap-8">
              <Link
                href="https://wa.me/1234567890"
                className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
              >
                <MessageSquare size={20} className="text-[#D4AF37]" />
                <span>WhatsApp</span>
              </Link>
              <Link
                href="tel:+1234567890"
                className="flex items-center gap-2 text-gray-600 hover:text-[#D4AF37] transition-colors"
              >
                <Phone size={20} className="text-[#D4AF37]" />
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
