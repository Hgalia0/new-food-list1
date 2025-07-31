import React from 'react'

export default function () {
  return (
    <div className='flex items-center  gap-50 scroll-smooth' id='home'>
  <div className=' flex flex-col gap-10'>
   <p className='text-6xl font-bold text-black'>Order Your best <br /> Food anytime</p>
   <p className='text-[20px] '>hey, our delicious food is waiting for you ,<br /> we are always near to you with fresh item of food</p>
    <button className='bg-orange-400 p-2 text-white font-bold rounded-[8px] w-40 hover:shadow-lg '>Explore Food</button>
  </div>
   <div>
    <img src="./food.png" alt="" className='w-80'   style={{ animation: "spin 20s linear infinite" }}/>

   </div>
        
    </div>
  )
}
