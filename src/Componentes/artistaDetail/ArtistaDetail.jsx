import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ArtistaDetail.css";
import { useNavigate } from "react-router-dom";
import Contador from "../Contador/Contador";
import { useCart } from "../../Context/CartContext";
import { getFirestore } from "../../Firebase";


const ArtistaDetail = () => {
    const [artistaDetail, setArtistaDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {artistaId} = useParams();
    const navegar = useNavigate();
    const {addArtista} = useCart();
    const [counter, setCounter] = useState (1); 

    useEffect(() => {
        const db = getFirestore()
        const artistCollection = db.collection('ARTISTAS')
        const selectedArtist = artistCollection.doc(artistaId);


        setLoading(true)
        selectedArtist.get().then(response => {
        if (!response.exists) console.log ("el producto no existe");
        setArtistaDetail({...response.data(), id: response.id})               
        }) 
        .catch((error) => setError(error))
        .finally (() => setLoading(false))      
    },[artistaId])

    if (loading || !setArtistaDetail) {
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
        <div className="contenedorDetail">
            <div>
                <img className="imgDetail" src={artistaDetail.imagenEntradas} alt={artistaDetail.artista} />
            </div>
            <div>
                <div className="textDetail">
                    <h5 className="titleDetail">{artistaDetail.artista}</h5>
                    <p className="descriptionDetail">{artistaDetail.descripcion}</p>
                    <Contador counter={counter} setCounter={setCounter} stock={artistaDetail.stock} />
                    <div className="buttonDetail">
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