import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Té Verde Matcha', description: 'Té orgánico para energía.', price: 15.00, image: 'https://images.unsplash.com/photo-1627483262645-a75d502575e6?q=80&w=2940&auto=format&fit=crop', category: 'bebidas-infusiones' },
    { id: 2, name: 'Aceite de Coco Orgánico', description: 'Ideal para cocinar y el cuidado de la piel.', price: 20.00, image: 'https://images.unsplash.com/photo-1616782298918-62d46e27a922?q=80&w=2832&auto=format&fit=crop', category: 'aceites-grasas' },
    { id: 3, name: 'Miel de Abeja Pura', description: 'Miel 100% natural, sin aditivos.', price: 9.50, image: 'https://images.unsplash.com/photo-1558229792-7182281a0279?q=80&w=2940&auto=format&fit=crop', category: 'endulzantes' },
    { id: 4, name: 'Harina de Almendras', description: 'Ideal para repostería sin gluten. Rica en proteínas y fibra.', price: 12.50, image: 'https://images.unsplash.com/photo-1627306915096-d449629b12a2?q=80&w=2940&auto=format&fit=crop', category: 'harinas-especiales' },
    { id: 5, name: 'Harina de Coco Orgánica', description: 'Perfecta para recetas bajas en carbohidratos.', price: 9.99, image: 'https://images.unsplash.com/photo-1582248742831-2fdf5f242c73?q=80&w=2835&auto=format&fit=crop', category: 'harinas-especiales' },
    { id: 6, name: 'Semillas de Chía Orgánicas', description: 'Ricas en omega-3 y fibra.', price: 7.75, image: 'https://images.unsplash.com/photo-1615486870020-f56b27d924f3?q=80&w=2835&auto=format&fit=crop', category: 'alimentos' },
    { id: 7, name: 'Suplemento de Vitamina C', description: 'Fortalece el sistema inmunológico.', price: 25.00, image: 'https://images.unsplash.com/photo-1560934759-ac2e61c5658e?q=80&w=2940&auto=format&fit=crop', category: 'suplementos' },
    { id: 8, name: 'Infusión de Jengibre y Limón', description: 'Perfecta para un momento de relajación.', price: 11.00, image: 'https://images.unsplash.com/photo-1510253687831-2917d2a7170a?q=80&w=2940&auto=format&fit=crop', category: 'bebidas-infusiones' },
    { id: 9, name: 'Avena de Granos Enteros', description: 'Ideal para un desayuno nutritivo.', price: 6.50, image: 'https://images.unsplash.com/photo-1596541223130-9ac3281d143c?q=80&w=2940&auto=format&fit=crop', category: 'alimentos' },
    { id: 10, name: 'Barra de Proteína Vegana', description: 'Snack energético de chocolate y maní.', price: 3.99, image: 'https://images.unsplash.com/photo-1549419163-f273ed96f642?q=80&w=2940&auto=format&fit=crop', category: 'snacks-saludables' },
  ]);

 
  const categoryLabels = {
    'bebidas-infusiones': 'Bebidas e infusiones',
    'aceites-grasas': 'Aceites y grasas',
    'endulzantes': 'Endulzantes',
    'harinas-especiales': 'Harinas Especiales',
    'alimentos': 'Alimentos',
    'suplementos': 'Suplementos',
    'snacks-saludables': 'Snacks Saludables',
  };

  
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  
  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const contextValue = {
    products,
    categoryLabels,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
