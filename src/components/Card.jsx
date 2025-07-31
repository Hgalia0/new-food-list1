import React from 'react';
import cake from '../images/cake.svg';
import remove from '../images/delete.png'
import Showrecipe from './Showrecipe';

export default function Card({ cart, onConfirmOrder }) {



  return (
    <div className='bg-white w-80 h-auto rounded-2xl p-4 shadow'>
      <p className='font-bold text-orange-600 text-2xl mb-3'>
        Your cart ({cart.length})
      </p>

      <div>
        {cart.length === 0 ? (
          <div className='flex flex-col justify-center items-center'>
            <img src="./waiter.jpg" alt="Cake" className="w-20 mb-2" />
            <p className='text-gray-800 font-semibold text-sm'>Your added items will appear here</p>
          </div>
        ) : (
          <>
            {/* 🧾 List of meals */}
            {cart.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 text-sm py-1">
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-3'>
                    <img src={item.strMealThumb} alt={item.strMeal} className="w-10 rounded-[8px] 
                " />
                    <p className='text-[16px] font-semibold'>{item.strMeal}</p>

                  </div>
                  <span>
                    <img src={remove} alt="remove" className='w-6 cursor-pointer' />
                  </span>
                </div>
                <div className='border-b border-neutral-300 mb-2'></div>
              </div>
            ))}

            <div className='flex flex-col gap-3'>

              {/* 💵 Order Total */}
              <div className="mt-4 text-right flex  justify-between">
                <p className='text-gray-400 text-sm'>Order Total</p>
                <p className='font-bold text-lg'>${(cart.length * 6.5).toFixed(2)}</p>
              </div>

              <button className='bg-orange-800 text-white rounded-3xl font-bold text-[18px] w-70 p-2 hover:bg-orange-400 ' onClick={onConfirmOrder}>
                <p>confirm order </p>
              </button>
            </div>





          </>
        )}

      </div>
    </div>
  );
}
