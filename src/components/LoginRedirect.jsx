import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Login from './Login'; // Importa el componente de Login

const LoginRedirect = () => {
  const { token } = useContext(UserContext);

  // Si el token es true, redirige al home
  return token ? <Navigate to="/" /> : <Login />;
};

export default LoginRedirect;
