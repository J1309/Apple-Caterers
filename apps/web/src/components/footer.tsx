import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

// Inline SVG social icons to avoid lucide-react version conflicts
const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l16 16M4 20L20 4" />
    <path d="M20 4h-5l-11 16h5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#5a1f28] text-white pt-20 pb-24 md:pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-bold tracking-tighter">
            APPLE<span className="text-gold">CATERERS</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Elevating your events with exquisite culinary experiences and impeccable service. From
            intimate gatherings to grand celebrations.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-maroon transition-all"
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
            Services
          </h4>
          <ul className="space-y-4">
            <li className="text-white/60 text-sm">Wedding Catering</li>
            <li className="text-white/60 text-sm">Corporate Events</li>
            <li className="text-white/60 text-sm">Birthday Parties</li>
            <li className="text-white/60 text-sm">Private Dinners</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-6">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>Kochi, Kerala, India</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 99471 06577</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Mail size={18} className="text-gold shrink-0" />
              <span>hello@premiumcatering.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs text-center md:text-left">
          © 2026 Apple Caterers. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-white/40 hover:text-white text-xs transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
