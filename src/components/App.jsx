import "./App.css"; //importacion y ejecucion
import "react-toastify/dist/ReactToastify.css";
//rfc estructura básica
/*
class => className
input => <input type="text" />
style = "nombrePromiedad: valor" => style = {{"nombrePropiedad" : "valor"}}
`${}`=> {}
mayor parte de atributos en camelCase
export => importo con llaves
export default => importo sin llaves

*/
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Toastify
import { ToastContainer } from 'react-toastify';
//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from "./Checkout/Checkout";
import { Cart } from "./Cart/Cart";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar nombre={"La Madriguera"}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path= '/checkout' element={<Checkout/>}/> 
          <Route path= '/cart' element={<Cart/>}/>
        </Routes>   
        <ToastContainer/>
      </BrowserRouter>  
    </>
  )
}
