import {React}from "react";
import "./styles.css";
import {Link} from 'react-router-dom'
import {TableCell} from '@mui/material'

const Item = ({product}) => {

    const {producto, url, id} = product;

    return(
        <TableCell>
            
            <Link to={`/product/${product.id}`} key={id}><h2>{producto}</h2></Link>
            <img className="item" src={url} alt={producto}/>

        </TableCell>
    )
}

export default Item;