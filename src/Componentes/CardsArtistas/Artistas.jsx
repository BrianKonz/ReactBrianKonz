function CardArtista ({ imagenArtista, artista , fecha , hora , lugar , precio , agregarCarrito }) {
    return ( 
         <>
             <div>
                <img src={imagenArtista}/>
                <p>Artista: {artista} </p>
                <p>Fecha: {fecha} </p>
                <p>Hora: {hora} </p>
                <p>Lugar: {lugar} </p>
                <p>Precio: {precio} </p>
                <button onClick={agregarCarrito}>Agregar al carrito</button>
             </div>
         </>
     );
 
 }
 
 export default CardArtista