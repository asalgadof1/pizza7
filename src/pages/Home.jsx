// Home.jsx
import React, { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';
import pizzas from '../assets/data/pizza';  // Importa el array de pizzas local
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [pizzaData, setPizzaData] = useState([]);  // Estado para almacenar las pizzas
    const [loading, setLoading] = useState(true);  // Estado para indicar si se están cargando los datos

    // useEffect para simular la carga de los datos locales cuando el componente se monta
    useEffect(() => {
        setLoading(true);  // Comienza la carga
        setTimeout(() => {
            setPizzaData(pizzas);  // Cargar pizzas del archivo local
            setLoading(false);  // Termina la carga
        }, 1000);  // Simulación de un tiempo de espera para cargar datos
    }, []);

    // Renderizar el componente
    return (
        <div>
            <h1 className="menu-title">Menú de Pizzas</h1>
            {loading ? (
                <p>Cargando pizzas...</p>
            ) : pizzaData.length > 0 ? (
                <div className="pizza-grid" >
                    {pizzaData.map(pizza => (
                        <CardPizza key={pizza.id} pizza={pizza} />
                    ))}
                </div>
            ) : (
                <p>No hay pizzas disponibles en este momento.</p>
            )}
        </div>
    );
};

export default Home;
