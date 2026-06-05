import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const premiumEase = [0.16, 1, 0.3, 1];

  return (
    <footer className="w-full bg-transparent text-[#1a1a1a] pt-24 pb-12 px-6 md:px-16 max-w-7xl mx-auto border-t border-gray-100" id="services">
      <div className="flex flex-col items-center justify-center space-y-20">
        
        {/* 1. ELEVATED SECTION TITLE */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#c48e69] uppercase">
            Experience Comfort
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-medium tracking-wide text-[#1a1a1a]">
            Our Exclusive Services
          </h3>
          <div className="w-8 h-[1px] bg-[#c48e69]/40 mt-1"></div>
        </div>

        {/* 2. REFINED SERVICES DECK */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 text-center justify-items-center">
          
          {/* SERVICE 1: ONLINE BOOKING */}
          <div className="flex flex-col items-center gap-4 group cursor-pointer max-w-[180px]">
            <div className="w-14 h-14 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center bg-white shadow-sm group-hover:border-[#c48e69] group-hover:text-[#c48e69] transition-all duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 transform group-hover:scale-105 transition-transform duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[13px] tracking-widest uppercase font-medium text-[#1a1a1a] transition-colors duration-300">
                Online Booking
              </span>
              <div className="w-0 h-[1px] bg-[#c48e69] group-hover:w-full transition-all duration-500 ease-in-out mt-1"></div>
            </div>
          </div>

          {/* SERVICE 2: CATERING SERVICE */}
          <div className="flex flex-col items-center gap-4 group cursor-pointer max-w-[180px]">
            <div className="w-14 h-14 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center bg-white shadow-sm group-hover:border-[#c48e69] group-hover:text-[#c48e69] transition-all duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 transform group-hover:scale-105 transition-transform duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 18.75V21m-6.75-9h1.5m10.5 0h1.5M4.5 12a7.5 7.5 0 1 1 15 0H4.5Z" />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[13px] tracking-widest uppercase font-medium text-[#1a1a1a] transition-colors duration-300">
                Catering Events
              </span>
              <div className="w-0 h-[1px] bg-[#c48e69] group-hover:w-full transition-all duration-500 ease-in-out mt-1"></div>
            </div>
          </div>

          {/* SERVICE 3: MEMBERSHIP */}
          <div className="flex flex-col items-center gap-4 group cursor-pointer max-w-[180px]">
            <div className="w-14 h-14 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center bg-white shadow-sm group-hover:border-[#c48e69] group-hover:text-[#c48e69] transition-all duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 transform group-hover:scale-105 transition-transform duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0ZM12 15c0-1.268-.63-2.39-1.593-3.068a3.745 3.745 0 0 0-5.063 0C4.38 12.61 3.75 13.733 3.75 15h8.25Z" />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[13px] tracking-widest uppercase font-medium text-[#1a1a1a] transition-colors duration-300">
                Private Club
              </span>
              <div className="w-0 h-[1px] bg-[#c48e69] group-hover:w-full transition-all duration-500 ease-in-out mt-1"></div>
            </div>
          </div>

          {/* SERVICE 4: DELIVERY SERVICE */}
          <div className="flex flex-col items-center gap-4 group cursor-pointer max-w-[180px]">
            <div className="w-14 h-14 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center bg-white shadow-sm group-hover:border-[#c48e69] group-hover:text-[#c48e69] transition-all duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 transform group-hover:scale-105 transition-transform duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19.5 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 5.25h16.5A2.25 2.25 0 0 1 21 7.5V14a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V5.25Zm0 0h3.375a1.125 1.125 0 0 1 1.125 1.125V12" />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[13px] tracking-widest uppercase font-medium text-[#1a1a1a] transition-colors duration-300">
                Home Delivery
              </span>
              <div className="w-0 h-[1px] bg-[#c48e69] group-hover:w-full transition-all duration-500 ease-in-out mt-1"></div>
            </div>
          </div>
        </div>

        {/* 3. MULTI-COLUMN PREMIUM DIRECTORY CODESPACE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: premiumEase }}
          className="w-full pt-16 border-t border-gray-100/70 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left"
        >
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-medium tracking-wide text-[#1a1a1a]">
              Culinary <span className="italic font-normal text-[#c48e69]">Studio</span>
            </h4>
            <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
              Crafting premium gastronomic experiences with locally sourced structural integrity and modern luxury.
            </p>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c48e69]">
              Explore
            </span>
            <ul className="space-y-2.5 text-[14px] text-gray-600 font-normal">
              <li><a href="#home" className="hover:text-[#c48e69] transition-colors duration-300">Home Base</a></li>
              <li><a href="#menu" className="hover:text-[#c48e69] transition-colors duration-300">Signature Menu</a></li>
              <li><a href="#feature" className="hover:text-[#c48e69] transition-colors duration-300">Our Craftsmanship</a></li>
              <li><a href="#services" className="hover:text-[#c48e69] transition-colors duration-300">Exclusive Services</a></li>
            </ul>
          </div>

          {/* OPERATING HOURS */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c48e69]">
              Our Schedule
            </span>
            <div className="space-y-2 text-[14px] text-gray-600 font-normal leading-relaxed">
              <p><strong className="text-[#1a1a1a] font-medium">Mon — Fri:</strong> 11:00 AM – 11:00 PM</p>
              <p><strong className="text-[#1a1a1a] font-medium">Sat — Sun:</strong> 10:00 AM – Midnight</p>
              <span className="inline-block mt-1 text-[12px] italic text-amber-700/70">Kitchen closes 45 mins prior</span>
            </div>
          </div>

          {/* SOCIAL & CONNECT */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#c48e69]">
              Follow Our Journey
            </span>
            <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
              Stay tuned to our culinary releases and private club events.
            </p>
            <div className="flex items-center gap-4 pt-1 text-gray-600">
              <a href="#" className="hover:text-[#c48e69] transition-colors duration-300">
                <span className="text-[13px] font-medium tracking-wider uppercase">Instagram</span>
              </a>
              <span className="text-gray-200">|</span>
              <a href="#" className="hover:text-[#c48e69] transition-colors duration-300">
                <span className="text-[13px] font-medium tracking-wider uppercase">Facebook</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 4. REFINED UTILITY RIGHTS SYSTEM */}
        <div className="w-full pt-8 border-t border-gray-100/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-gray-600 font-normal tracking-wide">
          <p>© {new Date().getFullYear()} Culinary Studio. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors duration-300">Terms of Luxury Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}