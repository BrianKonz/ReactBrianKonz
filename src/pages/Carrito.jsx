/* import React from 'react';
import { useCart } from '../Context/cartContext';

const Carrito = () => {

    const {cart} = useCart();

  return <div>

    <p>Carrito</p>

    {cart.map((compra) => {
        return (
            <div key={compra.entrada.id}>
            <p> {compra.entrada.artista} </p>
            <p> {compra.cantidad} </p>
            </div>
        )
    })}

  </div>
};


export default Carrito; */

import React from 'react';
import { useCart } from '../Context/CartContext';

const Carrito = () => {

    const {cart} = useCart();

  return <div>Hola
      {cart.map((compra) => {
        return (
            <div key={compra.entrada.id}>
            <p> {compra.entrada.artista} </p>
            <p> {compra.cantidad} </p>
            </div>
        )
    })}
  </div>;
};

export default Carrito;

