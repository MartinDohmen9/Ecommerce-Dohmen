import React from "react";
import "./styles.css";
import ItemCount from "../ItemCount/ItemCount"
import BañadaChoco from '../../assets/images/productos/BañadaChoco.jpeg'
import Chocolate from '../../assets/images/productos/Chocolate.jpeg'
import KitKat from '../../assets/images/productos/KitKat.jpeg'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
    <div className="landing">
      <span>{greeting}</span>
    </div>
    <div className="landing">
      <ItemCount producto= {"Bañada con Chocolate"}stock={10} url={BañadaChoco}/>
      <ItemCount producto= {"Chocolate"}stock={7} url={Chocolate}/>
      <ItemCount producto= {"Kit Kat"}stock={5} url={KitKat}/>
    </div>
    </div>
  );
};

export default ItemListContainer;
