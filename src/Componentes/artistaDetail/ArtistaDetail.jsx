import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ArtistaDetail.css";
import { useNavigate } from "react-router-dom";



const ArtistaDetail = ({ increment }) => {
    const [artistaDetail, setArtistaDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {artistaId} = useParams();
    const navegar = useNavigate();
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

    const [counter, setCounter] = useState (1); 

    const restarEntrada = () => {
        if (counter > 1) {
            setCounter((prevState) => prevState -1);
        }
    };

    const sumarEntrada = () => {
        if (counter < artistaDetail.stock) {
        setCounter((prevState) => prevState +1);
        }
    };

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
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <p><small>Last updated 3 mins ago</small></p>
                    <div>
                        <input className="sumaResta" type="button" onClick={restarEntrada} value="-"></input>
                        <input className="counterCard" type="text" value={counter}></input>
                        <input className="sumaResta" type="button" onClick={sumarEntrada} value="+"></input>
                    </div>
                    <div>
                        <button className="buttonCarrito" onClick={()=>navegar('/entradas')}>Volver</button>
                        <button className="buttonCarrito" onClick={increment}>Agregar al carrito</button>
                    </div>  
                </div>
            </div>
        </div>
    </div>

    
    </>
)

};

export default ArtistaDetail