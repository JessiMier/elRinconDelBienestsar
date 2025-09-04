import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} ha sido añadido al carrito.`, { 
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{product.name}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
      </Link>
      <div className="p-5 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold text-green-700">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;