'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('ac-loader-seen');
    if (seen) return;
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('ac-loader-seen', 'true');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-maroon"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 50%)',
                'radial-gradient(circle at center, rgba(212,175,55,0.25) 0%, transparent 60%)',
                'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <motion.img
            src="/images/logo/AC_logo.png"
            alt="Apple Caterers"
            className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10"
            animate={{
              y: [0, -8, 0],
              filter: [
                'drop-shadow(0 0 20px rgba(212,175,55,0.3)) drop-shadow(0 0 40px rgba(212,175,55,0.1))',
                'drop-shadow(0 0 40px rgba(212,175,55,0.6)) drop-shadow(0 0 60px rgba(212,175,55,0.3))',
                'drop-shadow(0 0 20px rgba(212,175,55,0.3)) drop-shadow(0 0 40px rgba(212,175,55,0.1))',
              ],
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              filter: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
