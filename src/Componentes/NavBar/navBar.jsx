import "./nav.css";
import logoLobo from './ImagenesNav/logoLobo.png';

const NavBar = () => {
   return ( 
        <>
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
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="28" height="28" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                </div>
                </ul>
        </>
    );

}


export default NavBar