
  import confirm from '../images/icon-order-confirmed.svg'


export default function Showrecipe({ cart, onStartNewOrder }) {
  return (
    <div className='bg-white w-96 h-auto p-6 rounded-2xl shadow'>
        <img src={confirm} alt="" />
      <h2 className='text-2xl font-bold mb-4'>order confirmed</h2>

      {cart.map((item, index) => (
        <div key={index} className="flex justify-between border-b py-1 text-sm">
          <p>{item.strMeal}</p>
          <span>🍽️</span>
        </div>
      ))}

      <div className="mt-4 text-right flex justify-between">
        <p className='text-gray-400 text-sm'>Order Total</p>
        <p className='font-bold text-lg'>${(cart.length * 6.5).toFixed(2)}</p>
      </div>

      <button
        className='mt-6 bg-amber-800 text-white px-4 py-2 rounded-xl w-full'
        onClick={onStartNewOrder}
      >
        Start New Order
      </button>
    </div>
  );
}
