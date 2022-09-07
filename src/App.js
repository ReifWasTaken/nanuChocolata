import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Encabezado from './componentes/Header/Encabezado';
import ItemListConteiner  from './componentes/Items/ItemListConteiner';
import ItemCount from './componentes/Items/ItemCount';
import React, { useState } from "react";
import ItemDetailContainer from './componentes/Items/ItemDetailContainer';


function App() {
  let greeting = 'Hola, y BIENVENIDO. Hay Chocolove'

  const [count, setCount] = useState(0);
  const stockProducto = 8;

  const handleAumentar = () => {
    if (count < stockProducto) {
      setCount(count + 1);
    } else {
      alert("Disculpa, No hay suficiente stock");
    }
  };

  const handleRestar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("El producto no puede ser menor a 0");
    }
  };

  const onAdd = () => {
    console.log(count);
  };
//      <ItemListConteiner greeting={greeting}/>
  return (
    <div>
      <Encabezado />

      <NavBar />

      <ItemDetailContainer />

      <ItemCount
        count={count}
        handleAumentar={handleAumentar}
        handleRestar={handleRestar}
        onAdd={onAdd}
      />
    </div>
  );
}

export default App;
