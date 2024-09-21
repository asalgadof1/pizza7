import React from 'react';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza }) => (
  <div className="pizza-card">
    <h2>{pizza.nombre}</h2>
    <img src={pizza.img} alt={pizza.nombre} />
    <p>Descripción: {pizza.desc}</p> {/* Muestra la descripción */}
    <p>Ingredientes: {pizza.ingredients.join(", ")}</p> {/* Muestra los ingredientes */}
    <p>Precio: ${pizza.price}</p>
    <Link to={`/pizza/${pizza.id}`}>Ver detalles</Link>
  </div>
);

export default CardPizza;
