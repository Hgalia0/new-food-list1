import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Elegant incremental counting velocity
    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counter);
          setTimeout(onComplete, 600); // Soft delay before clearing layout
          return 100;
        }
        // Varied stepping speed for a organic premium feel
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(counter);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 bg-[#1a1a1a] z-[9999] flex flex-col items-center justify-center text-white"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Project Brand Text */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl tracking-[0.3em] uppercase text-[#c48e69]"
        >
          The Mainstay
        </motion.h2>

        {/* Minimalist Progress Track Indicator */}
        <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden mt-2">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#c48e69]"
            animate={{ width: `${count}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Numerical Counter */}
        <span className="text-[11px] tracking-[0.2em] font-mono text-gray-400 mt-2">
          {count}%
        </span>
      </div>
    </motion.div>
  );
}