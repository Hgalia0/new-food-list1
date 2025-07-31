import React from 'react';
import add from '../images/icon-add-to-cart.svg';

export default function MealCard({ meal, onAddToCart }) {
    return (
        <div className='flex flex-col gap-5 bg-orange-200 w-70 shadow-lg rounded-2xl relative'>
            <div className='flex items-center justify-center'>
                <img src={meal.image} alt={meal.name} className=" rounded-full w-50 absolute" />
            </div>
           
            <div className='flex items-center text-center  h-70 '>
                <div className='p-2 flex flex-col gap-3'>
                    <h2 className="font-semibold text-black text-2xl">{meal.name}</h2>
                    <p className="text-sm text-gray-700">{meal.description}</p>
                    <p className='text-orange-600 font-bold mt-1'>$ {meal.price}</p>
                </div>
                <button
                    onClick={() => onAddToCart(meal)}
                    className="w-12 h-12 flex justify-center items-center shadow-lg rounded-full p-2 bg-white absolute ml-65 mt-60 hover:bg-orange-100 hover:border-2 border-orange-400"
                >
                    <img src={add} alt="Add icon" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
