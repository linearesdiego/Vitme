import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';
import ComoFunciona from './components/sections/ComoFunciona/ComoFunciona';
import Cosecha from './components/sections/Cosecha';
import Elefante from './components/sections/Elefante';
import Equipo from './components/sections/Equipo';

function App() {
  return (
    <Home />
    /*
    <BrowserRouter>
      <div className="min-h-screen relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/cosecha" element={<Cosecha />} />
          <Route path="/elefante" element={<Elefante />} />
          <Route path="/elequipo" element={<Equipo />} />
        </Routes>
      </div>
    </BrowserRouter>
    */
  );
}

export default App;
