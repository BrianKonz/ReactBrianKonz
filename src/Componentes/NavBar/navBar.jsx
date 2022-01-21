import "./styles.css";
import logoLobo from './ImagenesNav/logoLobo.png';

const NavBar = () => {
   return ( 
        <>
            <navBar>
                <ul className="navBar">
                <div>
                <img className="logoLobo" src={logoLobo} />
                </div>
                <li className="liNav">
                    <a className="navText" href="">Home</a>
                </li>
                <li className="liNav">
                    <a className="navText" href="">Artistas</a>
                </li>
                <li className="liNav">
                    <a className="navText" href="">Entradas</a>
                </li>
                <div className="contenedorBuscador">
                    <input className="buscarNav" type="serch" placeholder="Buscar"></input>
                    <button className="botonNav" type="submit">Buscar</button>
                </div>
                </ul>
            </navBar>
        </>
    );

}

export default NavBar