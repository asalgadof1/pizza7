import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Register = () => {
  const { setToken } = useContext(UserContext); // Simulamos el registro con el contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // Estado para manejar errores
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulamos la lógica de registro
    if (email && password) {
      // Supongamos que el registro es exitoso y generamos un "token"
      setToken(true);  // Actualiza el token como si estuviera autenticado
      navigate('/profile');  // Redirige al perfil después del registro
    } else {
      setError('Todos los campos son obligatorios.');
    }
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Muestra un mensaje de error si hay */}
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
