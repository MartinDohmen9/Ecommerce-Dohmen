import {React, useState }from "react";
import "./styles.css";

const ItemCount = ({product, finalizar}) => {

    const [contador, setContador] = useState(0);
    
    const agregarItem = () =>{
        finalizar();
    }

    const count = (value) => {
        const result = contador + value;
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
    };

    const {stock} = product

    return(
        <div>
            
            <div className="container">

                <button className="btn" onClick={() => count(-1)}>-</button>
                <h1>{contador} | {stock}</h1>
                <button className="btn" onClick={() => count(+1)}>+</button>

            </div>

            <div className="container">

                <button className="btn-agregar" onClick={agregarItem}>Agregar item</button>

            </div>

        </div>
    )
}

export default ItemCount;