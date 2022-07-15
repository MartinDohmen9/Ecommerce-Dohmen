import {React, useState, useContext }from "react";
import "./styles.css";
import ItemCount from "../ItemCount/ItemCount"
import { Container} from '@mui/system'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({product}) => {
    
    const { addToCart } = useContext(CartContext);

    const {producto, url} = product;
    const [finalizado, setFinalizado] = useState(false)
    const [almacena, setAlmacena] = useState(0)

    const onAdd = (cant) => {
        setFinalizado(true);
        setAlmacena(cant);
        addToCart(product, cant);
        console.log('se agregaron ' + cant);
    }

    return(
        <div className="containerItem">
        <Container maxWidth="xs">

        <div className="container">        

            <h1>{producto}</h1>

        </div>

        <div className="container">     
           
            <img className="item" src={url} alt={producto}/>

        </div>
        
            {finalizado ? <Link to="/cart"><button>Finalizar compra</button></Link>
             : <ItemCount product={product} onAdd={onAdd}></ItemCount>}

        </Container>
        <Container maxWidth="xs">
                    <Typography align='center' variant="h5">
                    Detlla del producto
                </Typography>
        </Container>
        </div>
    )
}

export default ItemDetail;