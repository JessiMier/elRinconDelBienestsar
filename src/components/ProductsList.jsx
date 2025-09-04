import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

const ProductsList = ({ searchTerm, activeCategory }) => { 
  const { products } = useContext(ProductContext);

  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
      )}
    </div>
  );
};

export default ProductsList;