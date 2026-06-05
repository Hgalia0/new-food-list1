import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Main from './components/Main'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import FoodHeroBackground from './components/FoodHeroBackground'
import BurgerFeature from './components/BurgerFeature'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <div className="relative w-full min-h-screen bg-[#e7e7e7] overflow-hidden isolate font-sans text-[#222]">
      
      {/* 1. THE BLURRED BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="/salad.jpg" // Replace with your image path
          alt="Background gradient"
          className="w-full h-full object-cover scale-110 blur-[120px] opacity-75 pointer-events-none"
        />
      </div>
  
    <div className=' flex flex-col  scroll-smooth'>
      <div className=''>
      <NavBar />
      <br />
      <br />
      </div>

      <Hero />
      <br />
     
    
      
      <Main />
      <div className='sm:-mt-20'>
      <BurgerFeature />

      </div>
      <Footer/>
      </div>
        
    </div>
    
   
  </>
  )
}

export default App
