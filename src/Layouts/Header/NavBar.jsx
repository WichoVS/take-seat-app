import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../Assets/Styles/Global/img/nav-logo.png';
import '../../Assets/Styles/Global/header.css';

export default function Header() {
  const [userLog, setUserLog] = useState('');

  useEffect(() => {
    setUserLog(JSON.parse(localStorage.getItem('user')));
  }, []);

  const routesToDisplay = () => {
    if (userLog === '') {
      return (
        <>
          {' '}
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Ayuda">
              Ayuda
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Login" className="nav-link">
              Iniciar Sesión
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Registro" className="nav-link">
              Registrarse
            </Link>
          </li>
        </>
      );
    }
    return (
      <>
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/Busqueda">
            Búsqueda
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/Ayuda">
            Ayuda
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/Historial">
            Reservaciones
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/Perfil">
            Mi Cuenta
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar navbar-fixed-top">
      <div className="container flex-nowrap">
        <div className="navbar-header d-flex">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img className="img-fluid" src={navLogo} alt="nav-logo" />
          </Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="nav navbar-nav navbar-right d-flex flex-row">{routesToDisplay()}</ul>
        </div>
      </div>
    </nav>
  );
}
