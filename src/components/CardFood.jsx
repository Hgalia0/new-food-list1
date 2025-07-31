import React, { useState } from 'react'
import add from '../images/icon-add-to-cart.svg'

export default function ({ meal, onAddToCart }) {



    return (

        <div className='flex flex-col gap-5 bg-orange-200 shadow-lg rounded-2xl relative'>
            <div>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-60 rounded-2xl 
                " />





            </div>
            <div className='flex items-center  '>
                <div className='p-2'>
                    <h2 className="font-semibold text-black text-2xl ">{meal.strMeal}</h2>
                    <p className='text-orange-600 font-bold'>$ 6.50</p>

                </div>
                <button
                    onClick={() => onAddToCart(meal)}
                    className=" w-12 h-12 flex justify-center items-center shadow-lg rounded-full p-2 bg-white absolute ml-54 mt-10 hover:bg-orange-100 hover:border-2 border-orange-400 "
                >
                    <img src={add} alt="Add icon" className="w-5 h-5" />

                </button>


            </div>
        </div>
    )
}
