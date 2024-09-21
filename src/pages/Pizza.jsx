import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pizzas } from '../assets/data/pizza';  // Importa las pizzas desde el archivo local

const Pizza = () => {
  const { id } = useParams(); // Obtener el id de la pizza desde la URL
  const [pizza, setPizza] = useState(null); // Estado para la pizza obtenida
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    
    console.log("ID capturado desde la URL:", id);  // Imprime el id en la consola del navegador
    
    // Buscar la pizza en el array local por su id
    const foundPizza = pizzas.find((pizza) => pizza.id === id);
    
    if (foundPizza) {
      setPizza(foundPizza);  // Establecer la pizza encontrada en el estado
      setError(null);  // Limpiar errores si se encuentra la pizza
    } else {
      setError('No se pudo encontrar la pizza con el id proporcionado.');
    }
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!pizza) return <div>Cargando pizza...</div>;

  return (
    <div>
      <h1>{pizza.nombre}</h1>
      <img src={pizza.img} alt={pizza.nombre} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default Pizza;
