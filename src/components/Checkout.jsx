import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Tu carrito está vacío. No se puede procesar la compra.");
      return;
    }
    
    // Simular el pago exitoso
    alert("¡Pago procesado con éxito!");
    clearCart(); // Vacía el carrito
    navigate('/order-confirmation');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Finalizar Compra
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Resumen del Pedido</h2>
          {cart.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">Tu carrito está vacío.</p>
              <Link to="/" className="mt-4 inline-block text-green-600 hover:underline">
                Volver a la tienda
              </Link>
            </div>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                    </div>
                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between items-center border-t pt-4">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-bold text-green-700">${total.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Información de Envío</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
              <input type="text" id="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              Confirmar y Pagar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;