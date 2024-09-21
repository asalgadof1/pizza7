// Cart.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { token } = useContext(UserContext);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {/* Aquí mostrarías los productos del carrito */}
      
      <button 
        disabled={!token} 
        aria-label={!token ? "Inicia sesión para pagar" : "Pagar"}>
        Pagar
      </button>

      {!token && <p>Debes iniciar sesión para realizar el pago.</p>}
    </div>
  );
};

export default Cart;
