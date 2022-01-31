import './App.css';
import NavBar from './Componentes/NavBar/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ArtistasDetailContainer from './pages/ArtistasDetailContainer';
import ArtistaDetail from './Componentes/artistaDetail/ArtistaDetail';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'>
            <Route index element={<Home />} />
        </Route>
        <Route path='artistas'>
          <Route index element={<ArtistasDetailContainer />} />
          <Route path='artistaId' element={<ArtistaDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    /* <div className="App">
      <NavBar />
      <ContenedorArtistas />
    </div> */
    
  );
}

export default App;
