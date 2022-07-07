import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import { getProds } from '../../Mocks/productsData.js';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading]=useState(true)

  const {categoryId} = useParams();

/*  const getProducts = async () => 
  {
    try
    {
      const response = await getData
      setProducts(response)
    }
    catch(error)
    {
      console.log("Hubo un error:")
      console.log(error)
    }
    finally
    {
      setLoading(false)
    }
  }

  useEffect
      (() => {getProducts()
      },[])
*/
  useEffect (() => {
    getProds(categoryId)
    .then((res) => {
        setProducts(res);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        setLoading(false);
  });
  },[categoryId])

console.log(categoryId)

  return (
    <div>
    <div className="landing">

      <span>{greeting}</span>

    </div>
      
      {loading ? <p>Cargando...</p> : <ItemList productList={products}/> } 

    </div>
  );
};

export default ItemListContainer;


