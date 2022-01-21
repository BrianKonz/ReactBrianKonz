import './App.css';
import NavBar from './Componentes/NavBar/navBar';
import ContenedorArtistas from './Componentes/CardsArtistas/ContenedorArtistas/ContenedorArtista';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ContenedorArtistas />
    </div>
    
  );
}

export default App;
