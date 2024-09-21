// App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Home from './pages/Home'; // Asegúrate de tener el componente Home
import Register from './pages/Register'; // Asegúrate de tener Register
import NotFound from './pages/NotFound'; // Asegúrate de tener el componente NotFound
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute'; // Mueve PrivateRoute a un archivo separado

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
