import './App.css';
import NavBar from './componentes/NavBar';
import Encabezado from './componentes/Encabezado'
import Productos from './componentes/Productos';


function App() {
  return (
    <div>
      <Encabezado />

      <NavBar />

      <Productos />
    </div>
  );
}

export default App;
