import { useState } from "react";
import "./Artistas.css";


function CardArtista ({artista}) {

    const [counter, setCounter] = useState (1); 

    const restarEntrada = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const sumarEntrada = () => {
        if (counter < artista.stock) {
        setCounter(counter + 1);
        }
    };


    return ( 
         <>
                <div className="container">
                    <div>
                        <div className="imagesArtistas">
                            <img src={artista.imagenArtista} alt={artista.artista}/>
                        </div>
                        <div className="producto">
                            <h1 className="nombreArtista">Artista: {artista.artista} </h1>
                            <p className="textoCard">Fecha: {artista.fecha} </p>
                            <p className="textoCard">Hora: {artista.hora} </p>
                            <p className="textoCard">Lugar: {artista.lugar} </p>
                            <p className="precioCard">Precio: {artista.precio} </p>
                            <div>
                                <input className="sumaResta" type="button" onClick={restarEntrada} value="-"></input>
                                <input className="counterCard" type="text" value={counter}></input>
                                <input className="sumaResta" type="button" onClick={sumarEntrada} value="+"></input>
                            </div>
                            <div>
                                <button className="buttonCarrito" onClick={artista.agregarCarrito}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div> 
                </div>
         </>
     );
}



 export default CardArtista

