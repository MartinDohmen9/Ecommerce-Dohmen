import {React}from "react";
import "./styles.css";
import {Link} from 'react-router-dom'
import {TableCell} from '@mui/material'
import ItemCount from "../ItemCount/ItemCount";

const Item = ({product}) => {

    const {producto, url, id} = product;

    return(
        <TableCell>
            
            
            <Link to={`/product/${product.id}`} key={id}><h2>{producto}</h2></Link>
            <img className="item" src={url} alt={producto}/>

            <div className="containerItem">

            <ItemCount product={product}></ItemCount>

            </div>

        </TableCell>
    )
}

export default Item;