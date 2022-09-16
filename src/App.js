import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Encabezado from './componentes/Header/Encabezado';
import ItemListConteiner  from './componentes/Items/ItemListConteiner';
import ItemDetailContainer from './componentes/Items/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './componentes/footer/Footer';
import Cart from './componentes/carrito/Cart';
import {CarProvider} from './context/CartContext'



function App() {
  return (
    <div>
      <CarProvider>
        <BrowserRouter>
          <NavBar/>
            <Encabezado />
              <Routes>
                <Route path='/' element= {<ItemListConteiner/>} />
                <Route path='/category/:idcategory' element= {<ItemListConteiner/>}/>
                <Route path='/product/:idproduct' element ={<ItemDetailContainer/>}/>
                <Route path='/cart' element = {<Cart/>}/>
            </Routes>
          <Footer />  
        </BrowserRouter>
      </CarProvider>
    </div>
  );
}

export default App;
