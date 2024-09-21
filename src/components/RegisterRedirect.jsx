import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Register from './Register'; // Importa el componente de Register

const RegisterRedirect = () => {
  const { token } = useContext(UserContext);

  // Si el token es true, redirige al home
  return token ? <Navigate to="/" /> : <Register />;
};

export default RegisterRedirect;
