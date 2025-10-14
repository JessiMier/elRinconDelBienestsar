import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const AdminDashboard = () => {
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Panel de Administración</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 mx-auto w-full md:max-w-lg">
        <h3 className="text-2xl font-semibold mb-4">{editingProduct ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h3>
        <ProductForm productToEdit={editingProduct} onFormSubmit={() => setEditingProduct(null)} />
      </div>

      <ProductTable onEdit={setEditingProduct} />
    </div>
  );
};

export default AdminDashboard;