import { useState } from "react";
import "./Artistas.css";


function CardArtista ({ imagenArtista, artista , fecha , hora , lugar , precio , agregarCarrito, stock}) {

    const [counter, setCounter] = useState (1); 

    const restarEntrada = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const sumarEntrada = () => {
        if (counter < stock) {
        setCounter(counter + 1);
        }
    };


    return ( 
         <>
                <div className="container">
                    <div>
                        <div className="imagesArtistas">
                            <img src={imagenArtista} alt={artista}/>
                        </div>
                        <div className="producto">
                            <h1 className="nombreArtista">Artista: {artista} </h1>
                            <p className="textoCard">Fecha: {fecha} </p>
                            <p className="textoCard">Hora: {hora} </p>
                            <p className="textoCard">Lugar: {lugar} </p>
                            <p className="precioCard">Precio: {precio} </p>
                            <div>
                                <input className="sumaResta" type="button" onClick={restarEntrada} value="-"></input>
                                <input className="counterCard" type="text" value={counter}></input>
                                <input className="sumaResta" type="button" onClick={sumarEntrada} value="+"></input>
                            </div>
                            <div>
                                <button className="buttonCarrito" onClick={agregarCarrito}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div> 
                </div>
         </>
     );
}



 export default CardArtista

