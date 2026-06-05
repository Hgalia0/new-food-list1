import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BurgerFeature({ onOrderNow }) {
  const videoRef = useRef(null);
  const [isMobilePlaying, setIsMobilePlaying] = useState(true);
  const premiumEase = [0.16, 1, 0.3, 1];

  // Robust check to handle mobile Low Power Mode restrictions automatically
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play was blocked by mobile battery saver / low power settings
        setIsMobilePlaying(false);
      });
    }
  }, []);

  const toggleMobilePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsMobilePlaying(true);
      } else {
        videoRef.current.pause();
        setIsMobilePlaying(false);
      }
    }
  };

  return (
    <section className="w-full py-24 px-6 md:px-16 max-w-7xl mx-auto overflow-visible bg-transparent" id="feature">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* LEFT COLUMN: THE BURGER PRESENTATION FIX */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: premiumEase }}
          className="relative w-full flex justify-center md:justify-start order-2 md:order-1 pt-4 md:pt-0"
        >
          {/* Soft atmospheric glow */}
          <div className="absolute top-1/2 left-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Video Container Frame */}
          <div className="relative w-[85%] sm:w-[65%] md:w-[90%] max-w-sm rounded-full overflow-hidden bg-transparent">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              className="w-full h-auto object-cover select-none mix-blend-multiply contrast-[1.05] brightness-[1.02]"
              style={{ mixBlendMode: 'multiply' }} // Forced style layer overrides for strict iOS Safari viewport rules
            >
              {/* Added native MP4 fallback as iOS mobile devices do not parse webm formats natively */}
              <source src="/burger.mp4" type="video/mp4" />
              <source src="/burger.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Premium, clean overlay tap-to-play utility trigger for Mobile Power Saving modes */}
            {!isMobilePlaying && (
              <button 
                onClick={toggleMobilePlay}
                className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 text-white transition-opacity duration-300 active:opacity-90"
              >
                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-white/10 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 ml-0.5 text-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-black/40 px-3 py-1 rounded-full">
                  Tap to Animate
                </span>
              </button>
            )}
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