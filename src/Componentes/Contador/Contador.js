import React from 'react';


const Contador = ({counter, setCounter, stock}) => {

    const restarEntrada = () => {
        if (counter > 1) {
            setCounter((prevState) => prevState -1);
        }
    };

    const sumarEntrada = () => {
        if (counter < stock) {
        setCounter((prevState) => prevState +1);
        }
    };

  return <div>

        <button className="sumaResta" onClick={restarEntrada}>-</button>
        <span className="counterCard">{counter}</span>
        <button className="sumaResta" onClick={sumarEntrada}>+</button>
    </div>

};

export default Contador;
