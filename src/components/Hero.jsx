import React, { useState } from 'react'
import { AnimatePresence,motion } from 'framer-motion';


export default function Hero() {
  // Premium luxury-tier ease curve for slow deceleration
  const premiumEase = [0.16, 1, 0.3, 1];

  // Text container orchestrating the stagger sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  // Fixed layout breakage by using a vertical glide entry rather than breaking horizontal limits
  const textFadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: premiumEase },
    },
  };
const [isStoryOpen, setIsStoryOpen] = useState(false);
  return (
    <div 
      className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-6 px-6 max-w-7xl mx-auto scroll-smooth min-h-[85vh] py-12' 
      id='home'
    >
      {/* Left Column: Text Content Block (Fades & Glides from Bottom smoothly) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='flex flex-col items-start text-left gap-8 w-full md:w-1/2 z-10'
      >
        {/* Overline */}
        <motion.span 
          variants={textFadeUpVariants}
          className='uppercase tracking-[0.4em] text-xs text-[#c48e69] font-bold'
        >
          Premium Restaurant
        </motion.span>

        {/* Heading */}
        <motion.h1 
          variants={textFadeUpVariants}
          className='font-serif text-5xl lg:text-6xl font-medium leading-[1.15] text-[#1a1a1a]'
        >
          Culinary Masterpieces <br />
          <span className='italic font-normal text-[#c48e69]'>Crafted</span> for You
        </motion.h1>

        {/* Description & Story Link */}
        <motion.div 
          variants={textFadeUpVariants}
          className='flex flex-col gap-4 max-w-[480px]'
        >
          <p className='text-[16px] lg:text-[18px] text-[#555555] font-normal leading-relaxed tracking-wide'>
            From locally sourced seasonal ingredients to gourmet masterpieces, 
            satisfy your finest cravings in just a few clicks.
          </p>
        <span 
  onClick={() => setIsStoryOpen(true)}
  className='text-[#c48e69] font-medium tracking-wider text-sm uppercase border-b border-[#c48e69]/30 w-fit pb-1 cursor-pointer hover:border-[#c48e69] transition-colors duration-300'
>
  Explore Our Story →
</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={textFadeUpVariants}
          className='flex items-center gap-4 mt-2 w-full sm:w-auto'
        >
          <button
            className='
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
              w-full sm:w-auto
              shadow-sm
            '
          >
            Food Menu
          </button>
          
          <button
            className='
              bg-transparent
              border border-[#1a1a1a]/20
              text-[#1a1a1a]
              px-8 py-3.5
              rounded-sm
              text-sm
              tracking-wider
              uppercase
              font-medium
              hover:border-[#1a1a1a]
              hover:bg-[#1a1a1a]/5
              transition-all duration-500 ease-in-out
              w-full sm:w-auto
            '
          >
            Book a Table
          </button>
        </motion.div>
      </motion.div>

      {/* Right Column: Image Bowl Block (Fades Up + Micro-Floating loop) */}
      <div className='relative flex justify-center md:justify-end w-full md:w-1/2'>
        
        <motion.div 
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ 
            opacity: 1, 
            y: [0, -12, 0], // Instantly begins continuous smooth floating sequence
            scale: 1,
          }}
          transition={{
            opacity: { duration: 1.4, ease: premiumEase, delay: 0.1 },
            scale: { duration: 1.4, ease: premiumEase, delay: 0.1 },
            y: {
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              delay: 1.4 // Begins floating after finishing entry glide
            }
          }}
          className="relative group p-4"
        >
          {/* Background shadow aura */}
          <div className="absolute inset-0 scale-100 max-sm:scale-95 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-amber-50 "></div>
          
          <img 
            src="./food.png" 
            alt="Exquisite gourmet presentation" 
            className='w-full max-w-[480px] lg:max-w-[540px] h-auto mix-blend-multiply object-cover animate-spin-slow rounded-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-1000 ease-out hover:scale-[1.02]' 
            style={{ mixBlendMode: 'multiply' }}
          />
        </motion.div>
        
      </div>
  

{/* Place this inside your Hero component return statement */}
<AnimatePresence>
  {isStoryOpen && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]/90 backdrop-blur-md p-6"
    >
      {/* Close trigger on background click */}
      <div className="absolute inset-0" onClick={() => setIsStoryOpen(false)} />

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative bg-white max-w-2xl w-full p-10 md:p-14 rounded-sm shadow-2xl text-left space-y-6 z-10 overflow-hidden"
      >
        {/* Minimalist Close Button */}
        <button 
          onClick={() => setIsStoryOpen(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-[#1a1a1a] transition-colors duration-300 uppercase text-[11px] tracking-widest font-medium"
        >
          Close ✕
        </button>

        <span className="text-[10px] font-bold tracking-[0.4em] text-[#c48e69] uppercase block">
          Our Heritage
        </span>
        
        <h3 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-[#1a1a1a] leading-tight">
          A Culinary Vision <br />
          Dedicated to <span className="italic font-normal text-[#c48e69]">Refinement</span>
        </h3>
        
        <div className="w-12 h-[1px] bg-[#c48e69]/40 my-2"></div>

        <p className="text-[15px] text-gray-600 font-normal leading-relaxed tracking-wide">
          Born out of a passion for pristine structural presentation and flawless culinary architecture, 
          our studio treats every dish as a canvas. We bridge the gap between rigorous design principles 
          and exquisite gourmet execution.
        </p>

        <p className="text-[15px] text-gray-600 font-normal leading-relaxed tracking-wide">
          By collaborating with premium local artisans and securing perfectly marbled cuts, we ensure 
          that your dining experience is visually breathtaking, deeply memorable, and bursting with bold complexity.
        </p>

        <div className="pt-4">
          <button
            onClick={() => setIsStoryOpen(false)}
            className="bg-[#1a1a1a] text-white px-8 py-3 rounded-sm text-xs tracking-wider uppercase font-medium hover:bg-[#c48e69] transition-all duration-500 ease-in-out"
          >
            Return To Gallery
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  )
}