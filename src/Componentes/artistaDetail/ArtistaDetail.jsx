import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ArtistaDetail.css";
import { useNavigate } from "react-router-dom";


const ArtistaDetail = () => {
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

    <div class="Card">
        <div class="row g-0">
            <div class="col-5 col-sm-4">
                <img src={artistaDetail.imagenArtista} alt={artistaDetail.artista} />
            </div>
            <div class="col-7 col-sm-8">
                <div class="card-body">
                    <h5 class="card-title">{artistaDetail.artista}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <div>
                        <input className="sumaResta" type="button" onClick={restarEntrada} value="-"></input>
                        <input className="counterCard" type="text" value={counter}></input>
                        <input className="sumaResta" type="button" onClick={sumarEntrada} value="+"></input>
                    </div>
                    <div>
                        <button onClick={()=>navegar('/entradas')}>Volver</button>
                    </div>  
                </div>
            </div>
        </div>
    </div>

    
    </>
)

};

export default ArtistaDetail