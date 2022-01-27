import "./nav.css";
import { FaSearch } from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'

const NavBar = () => {
   return ( 
        <>
                <ul className="navBar">
                <div>
                    <h2 className="tituloLogo">EMT ARGENTINA</h2>
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
                    <input className="buscarNav" type="serch"></input>
                    <button className="botonNav" type="submit">
                    <FaSearch className="lupaIcon" />
                    </button>
                </div>
                <BsCart4 className="carritoIcon" />
                </ul>
        </>
    );

}


export default NavBar