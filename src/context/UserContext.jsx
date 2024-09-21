
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false); // El token inicial es "false"

  const logout = () => {
    setToken(false); // Cambiar el token a false al cerrar sesión
  };

  return (
    <UserContext.Provider value={{ token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  );
};

