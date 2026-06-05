import React from 'react';

export default function CardFood({ meal, onAddToCart, isCenter }) {
  // Luxury pricing formatting helper (Transforms 11.25$ -> $11.25)
  const formatPrice = (price) => {
    if (!price) return '';
    const cleanPrice = String(price).replace('$', '').trim();
    return `$${cleanPrice}`;
  };

  return (
    <div 
      className={`relative w-full max-w-[290px] sm:max-w-sm border px-5 pb-6 pt-20 sm:px-6 sm:pb-7 sm:pt-28 flex flex-col items-start transition-all duration-700 ease-out mx-auto
        ${isCenter 
          ? 'bg-white border-black/5 scale-105 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] rounded-2xl z-10' 
          : 'bg-white/40 backdrop-blur-md border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.02)] rounded-2xl opacity-60 scale-95 sm:scale-100 hover:opacity-90'
        }`}
    >
      
      {/* 1. THE FOOD IMAGE PRESENTATION */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out select-none
          ${isCenter 
            ? 'w-32 h-32 sm:w-44 sm:h-44 scale-105 drop-shadow-[0_16px_32px_rgba(0,0,0,0.12)]' 
            : 'w-28 h-28 sm:w-40 sm:h-40 scale-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]'
          }`}
      >
        <img 
          src={meal.image} 
          alt={meal.name} 
          className="w-full h-full object-cover mix-blend-multiply rounded-full" 
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* 2. PRESTIGE BADGE (Replacing the rigid star rating) */}
      <div className="mb-2 select-none">
        <span className="uppercase tracking-[0.25em] text-[10px] font-bold text-[#c48e69]">
          {meal.rating >= 8.5 || isCenter ? "Chef's Selection" : "Signature"}
        </span>
      </div>

      {/* 3. MEAL DETAILS */}
      <div className="w-full space-y-2 flex-grow">
        <h3 className="font-serif font-medium text-xl sm:text-2xl text-[#1a1a1a] capitalize leading-snug tracking-wide">
          {meal.name}
        </h3>
        <p className="text-xs sm:text-[14px] text-gray-600 font-normal leading-relaxed max-w-[90%] tracking-wide">
          {meal.description}
        </p>
      </div>

      {/* 4. CARD FOOTER: PRICE & MINIMALIST CTA */}
      <div className="w-full flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
        <span className="font-serif font-medium text-lg sm:text-xl text-[#1a1a1a] tracking-wide">
          {formatPrice(meal.price)}
        </span>
        
        <button
          onClick={() => onAddToCart(meal)}
          className="group flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-bold text-[#1a1a1a] hover:text-[#c48e69] transition-colors duration-300 focus:outline-none"
          aria-label="View details and order"
        >
          <span>Order</span>
          <svg 
            className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

    </div>
  );
}