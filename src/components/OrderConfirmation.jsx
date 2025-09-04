import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-6 py-8 text-center">
      <h1 className="text-5xl font-bold text-green-600 mb-4">¡Compra Exitosa!</h1>
      <p className="text-xl text-gray-700 mb-6">
        Tu pedido ha sido procesado y será enviado pronto.
      </p>
      <div className="text-6xl text-green-500 mb-8">🎉</div>
      <Link
        to="/"
        className="inline-block bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
      >
        Volver a la tienda
      </Link>
    </div>
  );
};

export default OrderConfirmation;