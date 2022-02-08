import { useState, useEffect } from "react";
import CardArtista from '../CardsArtistas/Artistas'
import { getFirestore } from "../../Firebase";

const ArtistasList = () => {
    const [artistas, setArtistas] = useState([])
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {
        const URL = "http://localhost:3001/ARTISTAS"
    
        setLoader(true)
        fetch(URL)
        .then((response) => response.json())
        .then((json) => setArtistas(json))
        .catch((error) => console.log(error))
        .finally(() => setLoader(false))
    }, []); 
    
    return (
        <>
        {loader ? <p>Cargando...</p> : artistas.map((artista) => <CardArtista key={artista.id} artista={artista} />)}
        </>
    )
   
}

export default ArtistasList;