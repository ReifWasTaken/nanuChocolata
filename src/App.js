import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Encabezado from './componentes/Header/Encabezado';
import ItemListConteiner  from './componentes/Items/ItemListConteiner';


function App() {
  let greeting = 'Hola, y BIENVENIDO. Hay Chocolove'
  return (
    <div>
      <Encabezado />

      <NavBar />

      <ItemListConteiner greeting={greeting}/>
    </div>
  );
}

export default App;
