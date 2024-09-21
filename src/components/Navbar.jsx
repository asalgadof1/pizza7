// Navbar.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import '../App.css';  // Ruta correcta para importar el archivo CSS


const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul className="navbar-menu" >
        <li  className="navbar-item"><Link to="/">Home</Link></li>
        {token ? (
          <>
            <li  className="navbar-item"><Link to="/profile">Profile</Link></li>
            <li  className="navbar-item"><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li  className="navbar-item"><Link to="/login">Login</Link></li>
            <li  className="navbar-item"><Link to="/register">Register</Link></li>
          </>
        )}
        <li  className="navbar-item"><Link to="/cart">Total</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
