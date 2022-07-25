import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams} from 'react-router-dom'
import { Container } from "@mui/material";
import {doc, getDoc, collection} from 'firebase/firestore'
import {db} from "../../firebase/firebase";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)


const {productId} = useParams()

    useEffect(() => {

      const itemCollection = collection(db,"itemCollection");
      const refDoc = doc(itemCollection,productId);

      getDoc(refDoc)
      .then(res => {
        setProduct({
          id: res.id,
          ...res.data(),
        })
      })
      .finally(() => {
        setLoading(false);
      });
      /*getProd(productId)
      .then((res) => {
          setProducts(res);
      })
      .catch((error) => {
          console.log(error);
      })
      .finally(() => {
          setLoading(false);
    });
  */},[productId])

  return (

    <Container>
      
      {loading ? <p>Cargando...</p> : <ItemDetail product={product}/>} 

    </Container>

  );
};

export default ItemDetailContainer;
