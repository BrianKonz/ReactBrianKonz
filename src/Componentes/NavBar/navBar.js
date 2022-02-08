import "./nav.css";
import { FaSearch } from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useState } from "react";



const NavBar = () => {

    const [counterCarrito, setCounterCarrito] = useState (0);

    const increment = () => {
        setCounterCarrito((prevState) => prevState +1);
    } 

   return ( 
        <>
                <ul className="navBar">
                <div>
                    <Link to='/' className="tituloLogo">EMT ARGENTINA</Link>
                </div>
                <li className="liNav">
                    <Link to='/' className="navText">Home</Link>
                </li>
                <li className="liNav">
                    <Link to='/artistasmain' className="navText">Artistas</Link>
                </li>
                <li className="liNav">
                    <Link to='/entradas' className="navText">Entradas</Link>
                </li>
                <div className="contenedorBuscador">
                    <input className="buscarNav" type="serch"></input>
                    <button className="botonNav" type="submit">
                    <FaSearch className="lupaIcon" />
                    </button>
                </div>
                <BsCart4 className="carritoIcon" />
                {counterCarrito}
                </ul>
        </>
    );

}


export default NavBar