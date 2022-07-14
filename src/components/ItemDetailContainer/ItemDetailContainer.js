import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProd } from '../../Mocks/productsData.js'
import { useParams} from 'react-router-dom'
import { Container } from "@mui/material";

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

const {productId} = useParams()

    useEffect
    (() => {
      getProd(productId)
      .then((res) => {
          setProducts(res);
      })
      .catch((error) => {
          console.log(error);
      })
      .finally(() => {
          setLoading(false);
    });
    },[productId])

  return (

    <Container>
      
      {loading ? <p>Cargando...</p> : <ItemDetail product={products}/>} 

    </Container>

  );
};

export default ItemDetailContainer;
