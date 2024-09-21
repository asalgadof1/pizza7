// Profile.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const { token } = useContext(UserContext); // Obtenemos el token (simulado) desde el contexto
  const user = { name: 'Juan Pérez', email: 'juanperez@example.com' }; // Simulación de datos de usuario

  return (
    <section>
      <h1>Perfil de Usuario</h1>
      {token ? (
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No tienes acceso a esta página. Por favor, inicia sesión.</p>
      )}
    </section>
  );
};

export default Profile;
