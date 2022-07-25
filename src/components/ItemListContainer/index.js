import  React, {useState , useEffect} from "react";
import "./styles.css";
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';
import {db} from "../../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore";

console.log(db);

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading]=useState(true)

  const {categoryId} = useParams();

  useEffect (() => {

    const q = categoryId 
    ? query(collection(db,'itemCollection'), where("category", "==", categoryId))
    : collection(db, 'itemCollection');

    getDocs(q)
    .then(res => {
      const list = res.docs.map(product => {
        return {
          id: product.id,
          ...product.data(),
        }
      })
      console.log(list)
      setProducts(list);
    })
    .finally(() => {
      setLoading(false);})

  getDocs(collection(db,'ventas'))
  .then(res => {
    const ventas = res.docs.map(venta => {
      return {
        idVenta: venta.id,
        ...venta.data()
      }
    })
    console.log(ventas)
  })

    /*getProds(categoryId)
    .then((res) => {
        setProducts(res);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        setLoading(false);
  });*/
  },[categoryId])

console.log(categoryId)

  return (
    <div>
    <div className="landing">

      <span>{greeting}</span>

    </div>
    
    <div className="centrando">
      {loading ? <p>Cargando...</p> : <ItemList productList={products}/> } 
    </div>

    </div>
  );
};

export default ItemListContainer;