import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useContext(AuthContext); 
  const location = useLocation();

  
  if (!isAuthenticated || user?.role !== 'admin') { 
    
    return <Navigate to="/" state={{ from: location }} replace />; 
  }

  return children;
};

export default PrivateRoute;