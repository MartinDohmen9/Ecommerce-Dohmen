import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, deleteItem, calcularTotal, terminarCompra } = useContext(CartContext);

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            items: cart,
            total: calcularTotal(),
            date: serverTimestamp()
        });
    }

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
                <Link to="/"><button onClick={() => {finalizarCompra(); terminarCompra();}}>Finalizar Compra</button></Link>
            </div>
        </div>
    );
};

export default Cart;