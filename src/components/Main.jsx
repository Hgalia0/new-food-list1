import React, { useEffect, useState } from 'react';
import CardFood from './CardFood';
import data from './menu.json';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MenuSection() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setMeals(data);
  }, []);

  const handleAddToCart = (meal) => {
    setCart((prev) => [...prev, meal]);
  };

  return (
    <section className="w-full py-24 px-4 md:px-16 max-w-7xl mx-auto overflow-hidden bg-transparent" id="menu">
      
      {/* 1. ELEVATED HEADER TYPOGRAPHY */}
      <div className="text-center flex flex-col items-center gap-3 mb-14">
        <span className="text-[11px] font-bold tracking-[0.4em] text-[#c48e69] uppercase">
          Our Mainstay Menu
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-wide text-[#1a1a1a]">
          Signature Dishes
        </h2>
        <div className="w-12 h-[1px] bg-[#c48e69]/40 mt-1"></div>
      </div>

      {/* 2. SLIDER WRAPPER WITH INJECTED LUXURY PAGINATION OVERRIDES */}
      <div className="w-full px-2 md:px-6 relative custom-menu-swiper">
        
        {/* Scoped CSS Injector to re-style standard Swiper dots into minimalist lines */}
        <style>{`
          .custom-menu-swiper .swiper-pagination {
            bottom: -8px !important;
          }
          .custom-menu-swiper .swiper-pagination-bullet {
            width: 16px !important;
            height: 2px !important;
            border-radius: 0px !important;
            background: #1a1a1a !important;
            opacity: 0.15 !important;
            transition: all 0.4s ease-in-out !important;
          }
          .custom-menu-swiper .swiper-pagination-bullet-active {
            width: 32px !important;
            background: #c48e69 !important;
            opacity: 1 !important;
          }
        `}</style>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, 
              spaceBetween: 40,
            }
          }}
          className="!overflow-visible"
        >
          {meals.map((meal) => (
            <SwiperSlide key={meal.idMeal || meal.id} className="pt-24 pb-14">
              {({ isActive }) => (
                <motion.div 
                  initial={false}
                  animate={{ 
                    scale: isActive ? 1.05 : 0.96,
                    y: isActive ? -4 : 0
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 1.2
                  }}
                  className={`h-full transition-opacity duration-700 ease-out
                    ${isActive 
                      ? 'opacity-100 pointer-events-auto' 
                      : 'opacity-40 pointer-events-none'
                    }`}
                >
                  <CardFood 
                    meal={meal} 
                    onAddToCart={handleAddToCart} 
                    isCenter={isActive} 
                  />
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}