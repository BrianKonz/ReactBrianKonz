import { createContext, useContext, useState } from "react";



export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState ([]);

    const addArtista = (entrada, cantidad) => {

        const nuevoArtista = {entrada, cantidad}
        console.log(cart)

        setCart ((prevState) => [...prevState, nuevoArtista]) 

        

    }

    const limpiarCarrito = () => {

        setCart([])
    }

    const borrarCompra = (id) => {

        setCart((prevState) => prevState.filter((element) => element.entrada.id !== id) )
    }

    return<CartContext.Provider value={{cart, addArtista, limpiarCarrito, borrarCompra}}>{children}</CartContext.Provider>
    

} 

export const useCart = () => useContext(CartContext);