import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 font-heading text-neutral-dark">Tu Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map(item => (
                            <li key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg bg-gray-50">
                                {/* Product Image and Name Section */}
                                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                                    <h3 className="text-lg font-semibold text-gray-800 break-words flex-1">{item.name}</h3>
                                </div>

                                {/* Quantity, Price, and Buttons Section */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                                    <div className="flex items-center space-x-2">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 text-gray-700 p-1 rounded-full hover:bg-gray-300 transition-colors">
                                            <FaMinus />
                                        </button>
                                        <span className="text-lg font-bold w-6 text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-green-500 text-white p-1 rounded-full hover:bg-green-600 transition-colors">
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <p className="text-gray-600 font-medium sm:hidden">${(item.price * item.quantity).toFixed(2)}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors flex items-center mt-2 sm:mt-0">
                                        <FaTimes className="mr-1" /> Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-bold text-gray-700">Total:</span>
                            <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
                        </div>
                        <div className="space-y-3">
                            <Link to="/checkout" className="block w-full text-center bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
                                Proceder al pago
                            </Link>
                            <button
                                onClick={clearCart}
                                className="block w-full text-center bg-red-500 text-white py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300"
                            >
                                Vaciar Carrito
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;