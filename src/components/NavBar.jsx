import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  
  const premiumEase = [0.16, 1, 0.3, 1];
  
  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'MENU', href: '#menu' },
    { name: 'FEATURE', href: '#feature' }, // Linked up your new feature segment
    { name: 'SERVICES', href: '#services' }
  ];

  // Listens to page displacement to apply a high-end dynamic backdrop shift
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b
      ${isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-gray-100/60 py-4 shadow-sm' 
        : 'bg-transparent border-transparent py-6'}`}
    >
      <div className='max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between'>
        
        {/* PREMIUM LOGO BRANDMARK */}
        <a 
          href="#home" 
          className='text-lg font-serif tracking-[0.25em] text-[#1a1a1a] hover:text-[#c48e69] transition-colors duration-300 font-medium'
        >
          FOODEAT<span className='text-[#c48e69] font-sans font-bold'>.</span>
        </a>

        {/* DESKTOP INTERACTIVE LINKS (Using sliding animation track) */}
        <div 
          className='hidden md:flex items-center gap-1 text-[12px] font-bold tracking-[0.25em] text-[#1a1a1a]'
          onMouseLeave={() => setHoveredTab(null)}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredTab(link.name)}
              className="relative px-5 py-2 transition-colors duration-300 rounded-sm hover:text-[#c48e69] focus:outline-none"
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredTab === link.name && (
                <motion.span
                  layoutId="navHoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-[#c48e69]/5 rounded-sm z-0"
                />
              )}
            </a>
          ))}
        </div>

        {/* RIGHT AREA: USER CONTROLS & HAMBURGER */}
        <div className='flex items-center gap-6'>
          
          {/* PROFILE ARCHITECTURE */}
          <div className='flex items-center gap-2 cursor-pointer select-none group'>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
              alt="User account portrait" 
              className='w-7 h-7 rounded-full object-cover border border-[#c48e69]/20 shadow-sm transition-transform duration-500 group-hover:scale-105'
            />
            <svg 
              className="w-2.5 h-2.5 text-[#1a1a1a] opacity-60 transition-transform duration-500 group-hover:translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* MOBILE TOGGLE TRIGGER */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-1 text-[#1a1a1a] focus:outline-none relative w-6 h-6 flex flex-col justify-center items-center gap-1.5'
            aria-label="Toggle structural menu"
          >
            <span className={`h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ease-out rounded-full ${isOpen ? 'w-6 rotate-45 translate-y-[4px]' : 'w-5 self-end'}`} />
            <span className={`h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ease-out rounded-full ${isOpen ? 'w-0 opacity-0' : 'w-6'}`} />
            <span className={`h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ease-out rounded-full ${isOpen ? 'w-6 -rotate-45 -translate-y-[3.5px]' : 'w-4 self-end'}`} />
          </button>
        </div>
      </div>

      {/* --- CINEMATIC MOBILE NAVIGATION OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: premiumEase }}
            className='md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden'
          >
            <div className='flex flex-col p-8 gap-6 text-center text-[11px] font-bold tracking-[0.3em] text-[#1a1a1a]'>
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="py-2 border-b border-gray-50/60 hover:text-[#c48e69] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}