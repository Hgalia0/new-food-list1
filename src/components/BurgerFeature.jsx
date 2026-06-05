import React from 'react';
import { motion } from 'framer-motion';

export default function BurgerFeature({ onOrderNow }) {
  // Premium ease curve matching your luxury brand theme
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <section className="w-full py-24 px-6 md:px-16 max-w-7xl mx-auto overflow-visible bg-transparent" id="feature">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* LEFT COLUMN: THE BURGER IMAGE/VIDEO PRESENTATION */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: premiumEase }}
          className="relative w-full flex justify-center md:justify-start order-2 md:order-1 pt-4 md:pt-0"
        >
          {/* Elegant soft backdrop atmosphere glow */}
          <div className="absolute top-1/2 left-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative w-[75%] sm:w-[60%] md:w-[85%] max-w-sm transition-transform duration-1000 ease-out hover:scale-[1.02]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover select-none mix-blend-multiply"
            >
              <source src="/burger.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: TEXT CONTENT & COPY */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: premiumEase, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-6 order-1 md:order-2 text-center max-w-[500px] mx-auto md:w-full"
        >
          <div className="space-y-7">
            <span className="uppercase tracking-[0.35em] text-[15px] font-bold text-[#f9bf98]">
              Gourmet Craftsmanship
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-wide text-[#1a1a1a] leading-[1.2]">
              Best Premium Beef <br /> For Gourmet Burgers
            </h2>
          </div>
          
          <p className="text-[15px] sm:text-[16px] text-gray-700 font-normal leading-relaxed tracking-wide">
            100% prime Angus beef patties are ideal. Since they are perfectly marbled, 
            they lock in savory juices during flame-grilling, allowing your gourmet burger 
            to stay remarkably tender, bold, and bursting with rich flavor in every single bite.
          </p>
          
          {/* Premium Geometric Action Button */}
          {onOrderNow && (
            <div className="pt-2">
              <button
                onClick={onOrderNow}
                className="
                  bg-[#1a1a1a]
                  text-white
                  px-8 py-3.5
                  rounded-sm
                  text-sm
                  tracking-wider
                  uppercase
                  font-medium
                  hover:bg-[#c48e69]
                  transition-all duration-500 ease-in-out
                  shadow-sm
                  focus:outline-none
                "
              >
                Explore Menu
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}