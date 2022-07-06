import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/index.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

  

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Bienvenido a Donuts Homero'}/>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenido a Donuts Homero'}/>}></Route>
        <Route path="/product/:productId" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
};

export default App;
