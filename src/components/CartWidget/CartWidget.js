import shopping_cart from "../../shopping_cart.png"
import "./styles.css"
import "../ItemCount/ItemCount"

const CartWidget = () => {
    return(
    <div className="containerCart">
      <button className="cart-btn">
        <img src={shopping_cart} alt="Cart Icon" className="cart-widget" />
      </button>
      <div className="button">
        <span className="button__badge">0</span>
      </div>
    </div>
    );
};

export default CartWidget