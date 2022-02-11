import React from 'react';
import { useCart } from '../Context/CartContext';

const Carrito = () => {

    const {cart, limpiarCarrito, borrarCompra} = useCart();

  return <div>Hola
      {cart.map((compra) => {
        return (
            <div key={compra.entrada.id}>
            <p style={{color:"red"}}> {compra.entrada.artista} </p>
            <p style={{color:"red"}}> {compra.cantidad} </p>
            <button onClick={() => borrarCompra(compra.entrada.id)}>Borrar Compra</button>
            </div>
        )
    })}
     <button onClick={limpiarCarrito}>Limpiar</button>
  </div>;
};

export default Carrito;

