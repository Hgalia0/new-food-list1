import { useState } from 'react'
import { AnimatePresence } from 'framer-motion' // 1. Imported AnimatePresence

import Main from './components/Main'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import FoodHeroBackground from './components/FoodHeroBackground'
import BurgerFeature from './components/BurgerFeature'
import Footer from './components/Footer'
import Preloader from './components/Preloader' // 2. Ensure your Preloader component is imported correctly

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* PRELOADER INTERCEPT SYSTEM */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`relative w-full min-h-screen bg-[#e7e7e7] overflow-hidden isolate font-sans text-[#222] transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* 1. THE BLURRED BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src="/salad.jpg" 
            alt="Background gradient"
            className="w-full h-full object-cover scale-110 blur-[120px] opacity-75 pointer-events-none"
          />
        </div>
    
        {/* MAIN LAYOUT SCROLL TRACK */}
        <div className='flex flex-col scroll-smooth'>
          
          {/* HEADER WRAPPER (Swapped `<br/>` for clean structure padding) */}
          <div className='w-full'>
            <NavBar />
          </div>

          {/* MAIN CONTAINER LAYOUT */}
          <div className="pt-28 md:pt-32"> {/* Gracefully offsets your fixed NavBar */}
            <Hero />
            
            <Main />
            
            <div className='sm:-mt-20'>
              <BurgerFeature />
            </div>
            
            <Footer />
          </div>
          
        </div>
          
      </div>
    </>
  )
}

export default App