import {React, useState }from "react";
import "./styles.css";
import {Link} from 'react-router-dom'
import {TableCell} from '@mui/material'

const Item = ({product}) => {

    const [contador, setContador] = useState(0);

    const count = (value) => {
        const result = contador + value;
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
    };

    const {producto, stock, url, id} = product

    return(
        <TableCell>

            <h2>{producto}</h2>
            
            <img className="item" src={url} alt={producto}/>

            <div className="containerItem">

                <Link to={`/product/${product.id}`} key={id}>Mirar Detalle</Link>
                <button className="btn" onClick={() => count(-1)}>Resta</button>
                <h1>{contador} | {stock}</h1>
                <button className="btn" onClick={() => count(+1)}>Suma</button>

            </div>

            <button className="btn-agregar" >agregar item</button>
        </TableCell>
    )
}

export default Item;