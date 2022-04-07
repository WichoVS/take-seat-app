import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Ayuda from './Pages/Ayuda';
import Administracion from './Pages/Administracion';
import Busqueda from './Pages/Busqueda';
import Reservacion from './Pages/Reservacion';
import RegistroRestaurante from './Pages/RegistroRestaurante';
import Menu from './Pages/Menu';
import Pago from './Pages/Pago';
import Perfil from './Pages/Perfil';
import Registro from './Pages/Registro';
import Restaurante from './Pages/Restaurante';
import ReservacionCreada from './Pages/ReservacionCreada';
import Historial from './Pages/Historial';
import Login from './Pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/Ayuda" element={<Ayuda />} />
        <Route exact path="/Administracion/Config" element={<Administracion />} />
        <Route exact path="/Busqueda" element={<Busqueda />} />
        <Route exact path="/Reservacion" element={<Reservacion />} />
        <Route exact path="/RegistroRestaurante" element={<RegistroRestaurante />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Pago" element={<Pago />} />
        <Route exact path="/Perfil" element={<Perfil />} />
        <Route exact path="/Registro" element={<Registro />} />
        <Route exact path="/Restaurante" element={<Restaurante />} />
        <Route exact path="/ReservacionCreada" element={<ReservacionCreada />} />
        <Route exact path="/Historial" element={<Historial />} />
        <Route exact path="/Login" element={<Login />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
