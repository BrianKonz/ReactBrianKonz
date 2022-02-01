import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArtistaDetail = () => {
    const [artistaDetail, setArtistaDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {artistaId} = useParams();

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

return (
    <>
    <div className="container">

    </div>
    <p>{artistaDetail.artista}</p>
    </>
)

};

export default ArtistaDetail