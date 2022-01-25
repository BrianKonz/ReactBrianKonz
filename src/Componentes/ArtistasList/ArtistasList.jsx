import { useState, useEffect } from "react";
import { getArtists } from "../dataBase";
import CardArtista from '../CardsArtistas/Artistas'

const ArtistasList = () => {
    const [artistas, setArtistas] = useState([])
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {
        setLoader(true)
        getArtists()
        .then((data) => {setArtistas(data)})
        .catch((error) => {console.log(error)})
        .finally(() => setLoader(false))
    }, []) 
    
    return (
        <>
        {loader ? <p>Cargando...</p> : artistas.map((artista) => <CardArtista key={artista.id} artista={artista} />)}
        </>
    )
   
}

export default ArtistasList;