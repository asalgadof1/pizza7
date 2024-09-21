// Login.jsx

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { setToken } = useContext(UserContext); // Asegúrate de tener acceso al setToken
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState(null); // Para mostrar errores
  const navigate = useNavigate(); // Importa y utiliza el hook useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificación simple de credenciales
    if (credentials.username === 'admin' && credentials.password === 'password') {
      setToken(true);  // Se establece el token como "true" para iniciar sesión
      navigate('/');  // Redirigir a la página Home
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;

