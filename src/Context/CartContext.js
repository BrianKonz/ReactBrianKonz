import { createContext, useContext, useState, useEffect } from "react";



export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState ([]);
    const [cartCantidad, setCartCantidad] = useState(0);


    useEffect(() => {
        const getCantidad = () => {
          let cantidad = 0;
          cart.forEach((order) => {
            cantidad += order.cantidad;
          });
          setCartCantidad(cantidad);
        };
        getCantidad();
      }, [cart]);

    const addArtista = (entrada, cantidad) => {

        const nuevoArtista = cart.some((order) => order.entrada.id === entrada.id);

        if (nuevoArtista) {
            // Modificar la cantidad
            const updatedCart = cart.map((order) => {
              if (order.entrada.id === entrada.id) {
                return { ...order, cantidad: cantidad + order.cantidad };
              } else {
                return order;
              }
            });
            setCart(updatedCart);
          } else {
            // Agregar nuevo elemento
            setCart((prev) => [...prev, { entrada, cantidad }]);
          }
        };
    



    const limpiarCarrito = () => {

        setCart([])
    }

    const borrarCompra = (id) => {

        setCart((prevState) => prevState.filter((element) => element.entrada.id !== id) )
    }


    

    return<CartContext.Provider value={{cart, addArtista, limpiarCarrito, borrarCompra, cartCantidad}}>{children}</CartContext.Provider>
    

} 

export const useCart = () => useContext(CartContext);