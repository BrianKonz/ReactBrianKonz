import './App.css';
import NavBar from './Componentes/NavBar/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ArtistasDetailContainer from './pages/ArtistasDetailContainer';
import ArtistaDetail from './Componentes/artistaDetail/ArtistaDetail';
import ArtistasPages from './pages/ArtistasPages';
import Entradas from './pages/Entradas';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'>
            <Route index element={<Home />} />
        </Route>
        <Route path='artistasmain'>
            <Route index element={<ArtistasPages />} />
        </Route>
        <Route path='entradas'>
            <Route index element={<Entradas />} />
        </Route>

        
        <Route path='artistas'>
          <Route index element={<ArtistasDetailContainer />} />
          <Route path=':artistaId' element={<ArtistaDetail />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
