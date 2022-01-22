import CardArtista from "../Artistas";
import HernanCattaneo from '../ContenedorArtistas/ImgArtistas/HernanCattaneo.png';
import MaceoPlex from '../ContenedorArtistas/ImgArtistas/MaceoPlex.png';
import AmelieLens from '../ContenedorArtistas/ImgArtistas/Ame.png';
import PeggyGou from '../ContenedorArtistas/ImgArtistas/Peggy.png';

 
const ContenedorArtistas = () => {

    return (
        <>
            <CardArtista
             imagenArtista={HernanCattaneo}
             artista="Hernan Cattaneo"
             fecha="10-02-2022"
             hora="16.00 hs a 22.00 hs"
             lugar="Campo de Polo"
             precio="$5000" 
             stock= "10" 
             /> 
            <CardArtista
            imagenArtista={MaceoPlex}
            artista="Maceo Plex"
            fecha="18-02-2022"
            hora="22.00 hs a 06.00 hs"
            lugar="Mandarin Park"
            precio="$3500"
            stock= "35"   
            /> 
            <CardArtista
            imagenArtista={AmelieLens}
            artista="Amelie Lens"
            fecha="24-02-2022"
            hora="23.00 hs a 07.00 hs"
            lugar="Crobar"
            precio="$4700"
            stock= "20"  
            /> 
            <CardArtista
            imagenArtista={PeggyGou}
            artista="Peggy Gou"
            fecha="28-02-2022"
            hora="21.00 hs a 05.00 hs"
            lugar="Mandarin Park"
            precio="$3750"
            stock= "40"   
            /> 
        </>
    );
}


export default ContenedorArtistas