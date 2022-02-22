import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ArtistaDetail.css";
import { useNavigate } from "react-router-dom";
import Contador from "../Contador/Contador";
import { useCart } from "../../Context/CartContext";


const ArtistaDetail = () => {
    const [artistaDetail, setArtistaDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {artistaId} = useParams();
    const navegar = useNavigate();
    const {addArtista} = useCart();
    const [counter, setCounter] = useState (1); 

    useEffect(() => {
        const URL = `http://localhost:3001/ARTISTAS/${artistaId}` 
        setLoading(true)
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setArtistaDetail(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },[artistaId])

    if (loading) {
        <p>Cargando...</p>
    }else if(error) {
        <p>Error 404</p>
    }


    const agregarCarrito = () => {
        addArtista(artistaDetail, counter)
        
    }

return (
    <>
    <div>
        <div >
            <div>
                <img src={artistaDetail.imagenEntradas} alt={artistaDetail.artista} />
            </div>
            <div>
                <div>
                    <h5>{artistaDetail.artista}</h5>
                    <p>{artistaDetail.descripcion}</p>
                    <Contador counter={counter} setCounter={setCounter} stock={artistaDetail.stock} />
                    <div>
                        <button className="buttonCarrito" onClick={()=>navegar('/entradas')}>Volver</button>
                        <button className="buttonCarrito" onClick={agregarCarrito}>Agregar al carrito</button>
                    </div>  
                </div>
            </div>
        </div>
    </div>

    
    </>
)

};

export default ArtistaDetail