import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import Cart from './Cart';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleLogout = () => {
    logout();
    toast.info('Sesión cerrada correctamente.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo de El Rincón del Bienestar"
            className="h-24 w-auto"
          />
          <h1 className="ml-4 text-2xl font-heading text-gray-800 font-bold">
            El Rincón del Bienestar
          </h1>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Inicio</Link>
          {isAuthenticated && user?.role === 'admin' && <Link to="/admin" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Admin</Link>}

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-700">Hola, {user?.username}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300 transform hover:scale-105"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-600 transition duration-300 transform hover:scale-105"
              >
                Registrarse
              </Link>
            </>
          )}

          <button
            onClick={handleCartClick}
            className="relative bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition duration-300 transform hover:scale-110"
          >
            <FaShoppingCart className="text-2xl" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
      {showCart && (
        <div className="absolute top-full right-0 mt-2 mr-6 w-96 z-40">
          <Cart />
        </div>
      )}
    </header>
  );
};

export default Header;