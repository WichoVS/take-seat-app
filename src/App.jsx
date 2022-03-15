import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Ayuda from './Pages/Ayuda';
import Administracion from './Pages/Administracion';
import Busqueda from './Pages/Busqueda';
import Cita from './Pages/Cita';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Pago from './Pages/Pago';
import Perfil from './Pages/Perfil';
import Registro from './Pages/Registro';
import Restaurante from './Pages/Restaurante';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Ayuda" element={<Ayuda />} />
        <Route exact path="/Administracion" element={<Administracion />} />
        <Route exact path="/Busqueda" element={<Busqueda />} />
        <Route exact path="/Cita" element={<Cita />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Pago" element={<Pago />} />
        <Route exact path="/Perfil" element={<Perfil />} />
        <Route exact path="/Registro" element={<Registro />} />
        <Route exact path="/Restaurante" element={<Restaurante />} />
      </Routes>
    </Router>
  );
}
