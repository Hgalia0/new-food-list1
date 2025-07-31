import confirm from '../images/icon-order-confirmed.svg';

export default function ShowRecipe({ cart, onStartNewOrder }) {
  const total = (cart.length * 6.5).toFixed(2);

  return (
    <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
      <img src={confirm} alt="Order Confirmed" className="mb-4 mx-auto w-16 h-16" />
      <h2 className="text-2xl font-bold mb-4 text-center">Order Confirmed</h2>

      <div className="divide-y">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between py-2 text-sm">
            <p>{item.name}</p>
            <span>🍽️</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <p>Order Total</p>
        <p className="font-semibold text-black">${total}</p>
      </div>

      <button
        className="mt-6 bg-amber-800 hover:bg-amber-700 transition duration-200 text-white px-4 py-2 rounded-xl w-full"
        onClick={onStartNewOrder}
      >
        Start New Order
      </button>
    </div>
  );
}
