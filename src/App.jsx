import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/admin/AdminDashboard';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm'; 
import PrivateRoute from './components/PrivateRoute'; 
import { ProductProvider, ProductContext } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { products } = useContext(ProductContext);

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <main className="container mx-auto px-6 py-8">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Nuestros Productos Orgánicos
      </h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        onFilterChange={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ProductsList searchTerm={searchTerm} activeCategory={activeCategory} />
    </main>
  );
};


function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <div className="bg-gray-100 min-h-screen flex flex-col">
              <Header />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/register" element={<RegisterForm />} />
                 
                  <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                </Routes>
              </div>
              <Footer />
              <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </div>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;