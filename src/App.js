import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/index.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from './context/cartContext';

const App = () => {

  

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenido a Donuts Homero'}/>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenido a Donuts Homero'}/>}></Route>
          <Route path="/product/:productId" element={<ItemDetailContainer/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
};
export default App;
