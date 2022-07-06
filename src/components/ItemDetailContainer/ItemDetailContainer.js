import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProd } from '../../Mocks/productsData.js'
import { useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

    const {productId} = useParams()

  const getProducts = async () => 
  {
    try
    {
      const response = await getProd
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
      (() => {getProducts()} ,[])

  return (

    <div className="landing">
      
      {loading ? <p>Cargando...</p> : <ItemDetail product={products[parseInt(productId)]}/>} 

    </div>

  );
};

export default ItemDetailContainer;
