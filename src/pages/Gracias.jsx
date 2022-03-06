import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { getFirestore } from '../Firebase';
import { Link } from "react-router-dom";

const Gracias = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const {limpiarCarrito,} = useCart();
  

useEffect (()=> {
  const db = getFirestore();
  db.collection('orders')
  .doc(orderId)
  .get()
  .then((res) => setOrder({ id: res.id, ...res.data()}))
}, [orderId]);

if (!order.id) {
  return <p>Cargando...</p>
}

  return (
    <div>
      <h1>Gracias por su compra, sr/sra. {order.buyer.name}</h1>
      <h2>Detalle de su compra:</h2>
      <div>
      {order.items.map((dat) => {
                return (
                  <p key={dat.id}>            
                      <h2>Artista: {dat.entrada.artista}:</h2>
                      <h2>Cantidad de entradas: {dat.cantidad}</h2>
                      <h2>Precio: ${dat.entrada.precio}</h2>
                  </p>
                );
              })}
      <h2>Total de la compra: ${order.total}</h2>
      </div>

<Link to='/'><button className="btnCarrito" onClick={limpiarCarrito}>Continuar Navegando</button></Link>
    </div>
  );
};
export default Gracias;