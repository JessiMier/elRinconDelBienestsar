import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Té Verde Matcha', description: 'Té orgánico para energía.', price: 15.00, image: 'https://www.lacoopeencasa.coop/media/lcec/publico/articulos/8/6/7/867fae1ebdca52565889faa9b450adcf', category: 'bebidas-infusiones' },
    { id: 2, name: 'Aceite de Coco Orgánico', description: 'Ideal para cocinar y el cuidado de la piel.', price: 20.00, image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nwy/nwy15659/l/46.jpg', category: 'aceites-grasas' },
    { id: 3, name: 'Miel de Abeja Pura', description: 'Miel 100% natural, sin aditivos.', price: 9.50, image: 'https://acdn-us.mitiendanube.com/stores/967/890/products/miel_1080-91-c07a865097178e33e115968427827712-1024-1024.jpg', category: 'endulzantes' },
    { id: 4, name: 'Harina de Almendras', description: 'Ideal para repostería sin gluten. Rica en proteínas y fibra.', price: 12.50, image: 'https://www.mayoristadelegumbres.com.ar/wp-content/uploads/2020/05/harina-de-almendra.jpg', category: 'harinas-especiales' },
    { id: 5, name: 'Harina de Coco Orgánica', description: 'Perfecta para recetas bajas en carbohidratos.', price: 9.99, image: 'https://acdn-us.mitiendanube.com/stores/001/172/573/products/harina-de-coco-organica1-a4c4bcaa8377b0ef6715888087292290-1024-1024.jpg', category: 'harinas-especiales' },
    { id: 6, name: 'Semillas de Chía Orgánicas', description: 'Ricas en omega-3 y fibra.', price: 7.75, image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/KJH5NYG5GZCUTN6OR7P4EO4U5I.jpg', category: 'alimentos' },
    { id: 7, name: 'Suplemento de Vitamina C', description: 'Fortalece el sistema inmunológico.', price: 25.00, image: 'https://farmacityar.vtexassets.com/arquivos/ids/214480/223718_suplemento-dietario-pure-wellness-vitamina-c-1000-mg-x-30-comp_imagen-1.jpg?v=637662961974070000', category: 'suplementos' },
    { id: 8, name: 'Infusión de Jengibre y Limón', description: 'Perfecta para un momento de relajación.', price: 11.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzHjv0SLSDGnluDU2yQCb5ET2DNInu0VRwA&s', category: 'bebidas-infusiones' },
    { id: 9, name: 'Avena de Granos Enteros', description: 'Ideal para un desayuno nutritivo.', price: 6.50, image: 'https://www.costco.com.mx/medias/sys_master/products/h25/hf6/310086792511518.jpg', category: 'alimentos' },
    { id: 10, name: 'Barra de Proteína Vegana', description: 'Snack energético de chocolate y maní.', price: 3.99, image: 'https://victoryendurance.com/wp-content/uploads/2022/02/Vegan-Protein-Wafer-Bar-pineapplecoconut-web.png', category: 'snacks-saludables' },
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
