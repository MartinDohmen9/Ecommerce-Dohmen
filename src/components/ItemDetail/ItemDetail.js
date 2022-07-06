import {React, useState }from "react";
import "./styles.css";

const ItemDetail = ({product}) => {
    
    const [contador, setContador] = useState(0);
    
    const count = (value) => {
        const result = contador + value;
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
    };
    
    const {producto, stock, url} = product
    
    
    return(
        <div>

            <h1>{producto}</h1>
            
            <img className="item" src={url} alt={producto}/>

            <div className="containerItem">

                <text>Detalle del producto</text>

                <button className="btn" onClick={() => count(-1)}>Resta</button>
                <h1>{contador} | {stock}</h1>
                <button className="btn" onClick={() => count(+1)}>Suma</button>

            </div>

            <button className="btn-agregar" >agregar item</button>
        </div>
    )
}

export default ItemDetail;