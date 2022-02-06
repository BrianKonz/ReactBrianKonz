import { useNavigate } from "react-router-dom";
import "./Artistas.css";


function CardArtista ({artista}) {
    const navigate = useNavigate();



    return ( 
         <>
     
                <div className="container">
                    <div>
                        <div className="imagesArtistas">
                            <img src={artista.imagenArtista} alt={artista.artista}/>
                        </div>
                        <div className="producto">
                            <h1 className="nombreArtista">{artista.artista} </h1>  
                            <p className="Descripcion"> {artista.descripcion} </p>                  
                            <p className="precioCard">${artista.precio} </p>
                            <div>
                                <button className="buttonCarrito" onClick={() => navigate(`/artistas/${artista.id}`)}>Ver más</button>
                            </div>
                        </div>
                    </div> 
                </div>
         </>
     );
}



 export default CardArtista

