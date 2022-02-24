import { useState, useEffect } from "react";
import { getFirestore } from "../../Firebase";
import CardArtista from '../CardsArtistas/Artistas'


const ArtistasList = () => {
    const [artistas, setArtistas] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const db = getFirestore()
        const artistCollection = db.collection('ARTISTAS')
        
        const getDataFromFirestore = async () => {
            try {
            const response = await artistCollection.get()

            if (response.empty) {console.log("no hay productos")}

            setArtistas(response.docs.map((doc) => ({...doc.data(), id: doc.id})))
            } catch (err) {
                setError(error)
            }finally{
                setLoader(false)
            }
        }
        getDataFromFirestore()


    }, []); 
    
    return (
        <>
            {loader ? <p>Cargando...</p> : artistas.map((artista) => <CardArtista key={artista.id} artista={artista} />)}
        </>
    )
   
}

export default ArtistasList;