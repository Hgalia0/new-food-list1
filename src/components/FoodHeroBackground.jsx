import React from 'react';

export default function FoodHeroBackground({ children }) {
  return (
<div className="relative w-full min-h-screen bg-[#e5e5e5] overflow-hidden isolate">
      
      {/* --- THE BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="/salad.png" 
          alt="Background gradient"
          className="w-full h-full object-cover scale-110 blur-[120px] opacity-70 pointer-events-none"
        />
      </div>

      {/* --- YOUR CONTENT --- */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      
    </div>
  );
}