import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comofunciona" element={<Home />} />
          <Route path="/lote" element={<Home />} />
          <Route path="/elefante" element={<Home />} />
          <Route path="/elequipo" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
