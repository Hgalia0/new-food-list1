import React, { useEffect, useState } from 'react'
import CardFood from './CardFood';
import Card from './Card';
import Showrecipe from './Showrecipe';
import NavBar from './NavBar';
import data from './menu.json';

export default function
    () {
        const [meals, setMeals] = useState([]);
        const [cart, setCart] = useState([]);
        const [showRecipe, setShowRecipe] = useState(false);


    useEffect(() => {
           setMeals(data);
    }, []);

    console.log(meals);
    

     const handleAddToCart = (meal) => {
    setCart((prev) => [...prev, meal]);
    console.log('Cart:', [...cart, meal]);
  };


    return (
<div className='flex gap-5 ' id='menu'>

        < div className='p-5 flex flex-col gap-10'>
            

        <p className='font-bold text-4xl '>Our menu :</p>
        <br />
        <br />

    

            <div className='grid grid-cols-3 gap-30'>

                {meals.map((meal)=>(
                     <CardFood key={meal.idMeal} meal={meal} onAddToCart={handleAddToCart} />
                ))}

            </div>
        </div>
       <div className='mt-25'>
       

       {showRecipe ? (
  <Showrecipe
  cart={cart}
  onStartNewOrder={() => {
    setCart([]);          
    setShowRecipe(false);  
  }}
/>

) : (
  <Card cart={cart} onConfirmOrder={() => setShowRecipe(true)} />
)}

       </div>

</div>
    )
}
