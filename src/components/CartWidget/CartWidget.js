import { useContext } from "react";
import shopping_cart from "../../shopping_cart.png"
import "./styles.css"
import "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {

  const { cart } = useContext(CartContext);

  const acumulado = cart.reduce((acum, actual) => acum + actual.cantidad,0);

    return(
    <div className="containerCart">
      <button className="cart-btn">
        <Link to='cart'><img src={shopping_cart} alt="Cart Icon" className="cart-widget" /></Link>
      </button>
      <div className="button">
        <span className="button__badge">{acumulado}</span>
      </div>
    </div>
    );
};

export default CartWidget