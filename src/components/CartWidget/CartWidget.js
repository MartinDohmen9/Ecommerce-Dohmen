import shopping_cart from "../../shopping_cart.png"
import "./styles.css"
import "../ItemCount/ItemCount"
import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
    <div className="containerCart">
      <button className="cart-btn">
        <Link to='cart'><img src={shopping_cart} alt="Cart Icon" className="cart-widget" /></Link>
      </button>
      <div className="button">
        <span className="button__badge">0</span>
      </div>
    </div>
    );
};

export default CartWidget