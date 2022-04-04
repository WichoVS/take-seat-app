import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            <img src="../../Assets/Styles/Global/img/logo.png" alt="nav-logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
// <nav class="navbar navbar-fixed-top">
//     <div class="container">
//         <div class="navbar-header">
//             <a class="navbar-brand" href="./INICIO.html">
//                 <img src="img/nav-logo.png" alt="nav-logo"/>
//             </a>
//         </div>
//         <div id="navbar" class="navbar-collapse collapse">
//             <ul class="nav navbar-nav navbar-right">
//                 <li class="nav-item active">
//                     <a class="nav-link" href="INICIO.html">Inicio</a>
//                 </li>
//                <li class="nav-item active">
//                     <a class="nav-link" href="HISTORIAL_RESERVACIONES.html">Reservación</a>
//                 </li>
//                 </li>
//                  <li class="nav-item active">
//                     <a class="nav-link" href="INICIO.html">Ayuda</a>
//                 </li>
//                <li class="nav-item active">
//                     <a href="#" data-toggle="modal" data-target="#loginModal">Iniciar Sesión</a>
//                 </li>
//                 <li class="nav-item active">
//                      <a class="nav-link" href="EDITAR_CUENTA.html">Mi Cuenta</a>
//                  </li>
//             </ul>
//         </div>
//     </div>
// </nav>
