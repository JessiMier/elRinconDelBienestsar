import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleUpdateQuantity = (id, change) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Tu Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Cantidad: {item.quantity}</p>
                    <p className="text-green-600 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, -1)}
                    className="bg-gray-200 text-gray-700 px-2 rounded-md font-bold hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, 1)}
                    className="bg-gray-200 text-gray-700 px-2 rounded-md font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition duration-300 ml-2"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center border-t pt-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-green-700">
              ${total.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <Link
              to="/checkout"
              className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition duration-300 text-center block"
            >
              Proceder al pago
            </Link>
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition duration-300 text-center"
            >
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
