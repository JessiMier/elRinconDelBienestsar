import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      
      navigate('/');
    }
  }, [id, products, navigate]);

  if (!product) {
    return <div className="text-center text-xl py-20">Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-lg shadow-xl">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full lg:w-1/2 rounded-lg shadow-md object-scale-down" 
        />
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{product.description}</p>
          <p className="text-4xl font-bold text-green-700 mb-6">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;