import {React, useState, useEffect} from "react";
import "./styles.css";
import Item from "../Item/Item"
import BañadaChoco from '../../assets/images/productos/BañadaChoco.jpeg'
import Chocolate from '../../assets/images/productos/Chocolate.jpeg'
import KitKat from '../../assets/images/productos/KitKat.jpeg'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState(null)

  useEffect
  (
    () => 
    {
      const getProducts = async() => 
      {
        try
        {
          const response = await fetch('/Mocks/productsData.json')
          const data = await response.json()
          console.log(data)
          setProducts(data)
        }
        catch(error)
        {
          console.log("Hubo un error:")
          console.log(error)
        }
      }
      console.log(products)
      getProducts()
    }, []
    
    )

  return (
    <div>
    <div className="landing">
      <span>{greeting}</span>
    </div>
    <div className="landing">
      <Item producto= {"Bañada con Chocolate"}stock={10} url={BañadaChoco}/>
      <Item producto= {"Chocolate"}stock={7} url={Chocolate}/>
      <Item producto= {"Kit Kat"}stock={5} url={KitKat}/>
      
      {/*products.map((producto,i)=>{<h3 key={i}>{producto.producto}</h3>})*/}

    </div>
    </div>
  );
};

export default ItemListContainer;


