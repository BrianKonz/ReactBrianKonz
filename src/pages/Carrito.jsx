import React from 'react';
import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { getFirestore } from '../Firebase';
import { useNavigate } from "react-router-dom";
import "./CarritoCss/carrito.css"

const Carrito = () => {

    const {cart, limpiarCarrito, borrarCompra, addArtista} = useCart();
    const [name, setName] = useState ("")
    const [phone, setPhone] = useState("");
    const [dni, setDni] = useState("");
    const [mail, setMail] = useState("");
    const [comentario, setComentario] = useState("");
    const navegar = useNavigate();


    const getTotal = (cart) => {
      let total = 0;
      cart.forEach((element) => {
        total += element.entrada.precio * element.cantidad;
      });
      return total;
    };

    const handleSubmit = async (evt) => {
      evt.preventDefault();
  
      if (!name || !phone || !dni || !comentario || !mail) {
        console.log("Por favor llene los campos");
        return false;
      }
  
      const newOrder = {
        buyer: { name, phone, dni, comentario, mail },
        items: cart,
        total: getTotal(cart),
      };

      console.log(newOrder)
      const db = getFirestore()
      db.collection('orders').add(newOrder)
      .then((res) => {
        console.log("compra realizada exitosamente", res.id)
        navegar(`/gracias/${res.id}`);
      })
      .catch((err) => console.log("Hay un error", err))
    };


  return(
  <div>
    {cart.length === 0 ? <>
      <h2>No hay Productos en el Carrito</h2>
      <div className='contenedorNoProduct'>
      <button className="noProduct" onClick={()=>navegar('/entradas')}>Agregar productos</button>
      </div>
    </> :
        <>
            <h2>Detalle de la compra</h2>
                {cart.map((compra) => {
                  return (
                      <div className='contenedorArtistaCarrito' key={compra.entrada.id}>
                      <p className='artistaCarrito'>Artista: {compra.entrada.artista} </p>
                      <p className='cantidadCarrito'>Cantidad de entradas: {compra.cantidad} </p>
                      <p className='precioCarrito'>Precio: ${compra.entrada.precio * compra.cantidad} </p>
                      <div>
                      <img className="imgCarrito" src={compra.entrada.imagenEntradas} alt={compra.entrada.artista} />
                      </div>
                      <button className="btnCarritoBorrar" onClick={() => borrarCompra(compra.entrada.id)}>Borrar Artista</button>
                      </div>
                  )
              })}
              <div>
              <button className="btnCarrito" onClick={limpiarCarrito}>Limpiar Carrito</button>
              <button className="btnCarrito" onClick={()=>navegar('/entradas')}>Comprar Más</button>
              </div>


            <div>
              <div className='contacto'>
                  <h2>Introduzca sus datos</h2>
                    <div className='contenedor'>
                        <form
                          onSubmit={handleSubmit}
                          className= 'Formiul'
                        >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Escriba su nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='nombre'
                            required
                          />
                          <input
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="Escriba su teléfono"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='tel'
                            required
                          />
                          <input
                            type="number"
                            id="dni"
                            name="dni"
                            placeholder="Escriba su DNI"
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                            className='dni'
                            required
                          />
                          <input
                            type="text"
                            id="mail"
                            name="mail"
                            placeholder="Escriba su Mail"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            className='mail'
                            required
                          />
                          <input
                            type="text"
                            id="comentario"
                            name="comentario"
                            placeholder="Escriba su comentario"
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                            className='comentario'
                          />
                          <input className='btnForm' type="submit" value="Finalizar compra" />
                        </form>
                    </div>
                </div>
              </div>;
        </>    
}

</div>
) 
};


//Hay que hacer que no se repita el artista cuando compras y darle estilos a la tarjeta del carrito.
export default Carrito;

