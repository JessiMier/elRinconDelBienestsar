import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('user');
    if (storedAuth === 'true' && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  const login = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        if (username === 'admin' && password === 'admin@123') {
          const adminUser = { username: 'admin', role: 'admin' };
          setIsAuthenticated(true);
          setUser(adminUser); 
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('user', JSON.stringify(adminUser)); 
          resolve(true);
          return;
        }

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = storedUsers.find(
          (u) => u.username === username && u.password === password
        );

        if (foundUser) {
          const customerUser = { username: foundUser.username, role: 'customer' };
          setIsAuthenticated(true);
          setUser(customerUser); 
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('user', JSON.stringify(customerUser)); 
          resolve(true);
        } else {
          reject(new Error('Nombre de usuario o contraseña incorrectos.'));
        }
      }, 1000);
    });
  };

  const register = async (username, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = storedUsers.find(
          (u) => u.username === username || u.email === email
        );

        if (userExists) {
          reject(new Error('El nombre de usuario o correo electrónico ya existe.'));
        } else {
          const newUser = { username, email, password, role: 'customer' }; 
          localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
          resolve(true);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); 
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user'); 
  };

  const authValue = {
    isAuthenticated,
    user, 
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};