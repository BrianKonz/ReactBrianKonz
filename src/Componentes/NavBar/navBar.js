import "./nav.css";
import { BsCart4 } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";



const NavBar = () => {

    const {cartCantidad} = useCart();



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
                <Link to='/carrito'><BsCart4 className="carritoIcon" /> <span className="carritoNumber"> {cartCantidad} </span> </Link>
                </ul>
                
        </>
    );

}


export default NavBar