import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import Cart from './Cart';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <header className="bg-white text-neutral-dark shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo and site title */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo de El Rincón del Bienestar"
                        className="h-20 w-auto md:h-24"
                    />
                    <h1 className="hidden md:block ml-4 text-xl md:text-2xl font-heading text-gray-800 font-bold">
                        El Rincón del Bienestar
                    </h1>
                </Link>

                {/* Container for the hamburger menu and links */}
                <div className="flex items-center space-x-4">
                    {/* Desktop Navigation Menu */}
                    <nav className="hidden md:flex items-center space-x-6">
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
                            <div className="flex space-x-4">
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
                            </div>
                        )}
                    </nav>

                    {/* Mobile Hamburger Menu Button - visible ONLY on mobile */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-200 transition z-50"
                    >
                        {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>

                    {/* Cart Button - visible on all screens */}
                    <button
                        onClick={handleCartClick}
                        className="relative bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition duration-300 transform hover:scale-110 z-50"
                    >
                        <FaShoppingCart className="text-2xl" />
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu (slides out) */}
            {isMobileMenuOpen && (
                <>
                    <nav className="fixed inset-0 bg-white z-40 p-6 flex flex-col items-center space-y-6 md:hidden">
                        <div className="w-full flex justify-end">
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition-colors">
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition duration-300 text-xl" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
                        {isAuthenticated && user?.role === 'admin' && <Link to="/admin" className="text-gray-700 hover:text-green-600 font-medium transition duration-300 text-xl" onClick={() => setIsMobileMenuOpen(false)}>Admin</Link>}
                        {isAuthenticated ? (
                            <>
                                <span className="font-semibold text-gray-700 text-xl">Hola, {user?.username}!</span>
                                <button
                                    onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                                    className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300 text-lg w-full max-w-xs"
                                >
                                    Cerrar Sesión
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 text-lg w-full max-w-xs text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition duration-300 text-lg w-full max-w-xs text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </nav>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
                </>
            )}

            {/* Side Cart */}
            {showCart && (
                <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white p-6 shadow-lg z-50 overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold font-heading">Tu Carrito de Compras</h2>
                        <button onClick={() => setShowCart(false)} className="text-gray-700 hover:text-gray-900 transition-colors">
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <Cart />
                </div>
            )}
        </header>
    );
};

export default Header;