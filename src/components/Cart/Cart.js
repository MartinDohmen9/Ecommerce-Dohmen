import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const Cart = () => {
    const { cart, deleteItem, calcularTotal } = useContext(CartContext);
    // const total = calcularTotal()
    //console.log(cart);

    if (cart.length === 0) {
        return <h2>Está vacío tu carrito, andá a comprar</h2>;
    }

    return (
        <div>
            <div>
                {cart.map((prod) => (
                    <div
                        key={prod.id}
                        style={{
                            display: 'flex',
                            border: '2px solid black',
                            margin: '10px',
                            padding: '10px',
                        }}
                    >
                        <div>
                            <img src={prod.url} width="70px" alt="product" />
                        </div>
                        <h2>Producto: {prod.producto}</h2>
                        <h2>$ {prod.precio}</h2>
                        <h2>Cantidad: {prod.cantidad}</h2>
                        <button onClick={() => deleteItem(prod.id)}>
                            Delete
                        </button>
                    </div>
                ))}
                <h3>Total: $ {calcularTotal()} </h3>
            </div>
        </div>
    );
};

export default Cart;