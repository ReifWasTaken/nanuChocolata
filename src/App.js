import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Encabezado from './componentes/Header/Encabezado'
import ItemListConteiner  from './componentes/Items/ItemListConteiner';


function App() {
  return (
    <div>
      <Encabezado />

      <NavBar />

      <ItemListConteiner />
    </div>
  );
}

export default App;
