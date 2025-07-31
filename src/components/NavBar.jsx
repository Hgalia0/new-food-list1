import React from 'react'

export default function NavBar() {
  return (
    <div className='flex items-center justify-between'>
     
     <p className='text-black text-3xl font-bold'> Food<span className='text-orange-400'>time</span></p>

     <div className=''>
           <div className="hidden md:flex space-x-6 text-[18px]  text-black font-semibold">
          <a href="#home" className="hover:underline decoration-orange-400">Home</a>
          <a href="#menu" className="hover:underline decoration-orange-400">Menu</a>
          <a href="#media" className="hover:underline decoration-orange-400">Service</a>
          <a href="#work" className="hover:underline decoration-orange-400">About us</a>
        </div>

     </div>

     <div className=' flex gap-3 font-bold'>
        <button className='text-black '>sign in</button>
           <button className='bg-orange-400 p-2 text-white rounded-[8px] w-30  '>sign up</button>
     </div>


    </div>
  )
}
