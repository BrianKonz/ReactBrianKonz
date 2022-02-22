import React from 'react';
import { useState } from 'react';
import { useCart } from '../Context/CartContext';

const Carrito = () => {

    const {cart, limpiarCarrito, borrarCompra} = useCart();
    const [name, setName] = useState ("")
    const [phone, setPhone] = useState("");
    const [dni, setDni] = useState("");
    const [comentario, setComentario] = useState("");


    const getTotal = (cart) => {
      let total = 0;
      cart.forEach((element) => {
        total += element.entrada.precio * element.cantidad;
      });
      return total;
    };

    const handleSubmit = async (evt) => {
      evt.preventDefault();
  
      if (!name || !phone || !dni || !comentario ) {
        console.log("Por favor llene los campos");
        return false;
      }
  
      const newOrder = {
        buyer: { name, phone, dni, comentario },
        items: cart,
        total: getTotal(cart),
      };

      console.log(newOrder)
    };


  return <div>
      <h1>Carrito</h1>
      <h2>Detalle de la compra:</h2>
      {cart.map((compra) => {
        return (
            <div key={compra.entrada.id}>
            <p style={{color:"red"}}>Artista: {compra.entrada.artista} </p>
            <p style={{color:"red"}}>Cantidad de entradas: {compra.cantidad} </p>
            <p style={{color:"red"}}>Precio: ${compra.entrada.precio * compra.cantidad} </p>
            <button onClick={() => borrarCompra(compra.entrada.id)}>Borrar Compra</button>
            </div>
        )
    })}
     <button onClick={limpiarCarrito}>Limpiar</button>

     <h2>Introduzca sus datos:</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
        }}
      >
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escriba su nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Escriba su teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="phone">DNI</label>
        <input
          type="number"
          id="dni"
          name="dni"
          placeholder="Escriba su DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <label htmlFor="phone">¿Algún comentario?</label>
        <input
          type="text"
          id="comentario"
          name="comentario"
          placeholder="Escriba su comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <input type="submit" value="Finalizar compra" />
      </form>
     
  </div>;
};


//Hay que hacer que no se repita el artista cuando compras y darle estilos a la tarjeta del carrito.
export default Carrito;

