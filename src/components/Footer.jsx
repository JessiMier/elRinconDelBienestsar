import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-xl font-bold mb-4 md:mb-0">
            🌱 El Rincón del Bienestar
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-500 transition duration-300">Sobre Nosotros</a>
            <a href="#" className="hover:text-green-500 transition duration-300">Blog</a>
            <a href="#" className="hover:text-green-500 transition duration-300">Contacto</a>
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} El Rincón del Bienestar. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;