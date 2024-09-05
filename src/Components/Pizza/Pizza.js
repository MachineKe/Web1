import React, { useState } from 'react';
import ToppingsData from '../../Assets/data/toppings.json'; 

const Pizza = () => {
  const basePrice = 6; // Base price of the pizza
  const [toppings, setToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  const handleCheckboxChange = (topping, isChecked) => {
    if (isChecked) {
      setToppings([...toppings, topping]);
      setTotalPrice(totalPrice + topping.price);
    } else {
      const updatedToppings = toppings.filter(item => item !== topping);
      const updatedTotalPrice = updatedToppings.reduce((acc, curr) => acc + curr.price, basePrice);
      setToppings(updatedToppings);
      setTotalPrice(updatedTotalPrice < basePrice ? basePrice : updatedTotalPrice);
    }
  };

  const handleOrder = () => {
    const message = document.createElement('div');
    message.textContent = `Your pizza has been ordered! You need to pay £${totalPrice.toFixed(2)} `;
    message.classList.add('order-message');
    document.body.appendChild(message);
    setTimeout(() => {
      message.remove();
    }, 10000); // Remove the message after 10 seconds
  };

  const handleClearOrder = () => {
    setToppings([]);
    setTotalPrice(basePrice);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Build Your Own Pizza</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {ToppingsData.map(topping => (
            <div key={topping.name} className="flex items-center">
              <input
                type="checkbox"
                id={topping.name}
                onChange={e => handleCheckboxChange(topping, e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor={topping.name} className="ml-3 text-lg text-gray-700">
                {topping.name} - £{topping.price.toFixed(2)}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-600">Pizza Base price: £{basePrice}.00</p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Ingredients Selected:</h2>
          <div className="flex flex-wrap mt-4">
            {toppings.length > 0 ? (
              toppings.map(topping => (
                <div key={topping.name} className="flex items-center mr-4 mb-4">
                  <img 
                    src={require(`../../Assets/img/${topping.imageUrl}`)} 
                    alt={topping.name} 
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  <span className="text-lg text-gray-700">{topping.name}</span>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-500">No toppings selected.</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Total Price: £{totalPrice.toFixed(2)}</h2>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleOrder}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
          >
            Order Your Pizza
          </button>
          <button
            onClick={handleClearOrder}
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200"
          >
            Clear Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
