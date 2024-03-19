import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./Componentes/Home";
import { QuemSomos } from "./Componentes/QuemSomos";
import { Galeria } from "./Componentes/Galeria";
import { Contato } from "./Componentes/Contato";
import './global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quemSomos" element={<QuemSomos />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);