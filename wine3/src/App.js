import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import ComoFunciona from './pages/ComoFunciona';
import Lote from './pages/Lote';
import Elefante from './pages/Elefante';
import Equipo from './pages/Equipo';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/lote" element={<Lote />} />
          <Route path="/elefante" element={<Elefante />} />
          <Route path="/elequipo" element={<Equipo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
