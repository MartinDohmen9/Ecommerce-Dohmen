import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import { getData } from '../../Mocks/productsData.js';
import {useParams} from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading]=useState(true)

  const { categoryId } = useParams;

  const getProducts = async () => 
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

      

  return (
    <div>
    <div className="landing">

      <span>{greeting}</span>

    </div>
    <div className="landing">
      
      {loading ? <p>Cargando...</p> : <ItemList productList={products}/> } 

    </div>
    </div>
  );
};

export default ItemListContainer;


