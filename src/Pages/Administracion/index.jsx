import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../Layouts/Header/NavBar';
import Footer from '../../Layouts/Footer/Footer';
import CategoriasComponent from '../../Components/Administracion/Categorias';
import CiudadesComponent from '../../Components/Administracion/Ciudades';
import EstadosComponent from '../../Components/Administracion/Estados';
import PaisesComponent from '../../Components/Administracion/Paises';
import PromocionesComponent from '../../Components/Administracion/Promociones';
import ReservacionesComponent from '../../Components/Administracion/Reservaciones';
import RestaurantesComponent from '../../Components/Administracion/Restaurantes';
import UsuariosComponent from '../../Components/Administracion/Usuarios';
// import { Link } from 'react-router-dom';

export default function Administracion() {
  const [adminPage, setAdminPage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { config } = useParams();

  const onChangeTabHandler = ({ target }) => {
    setAdminPage(target.name);
  };

  const renderComponent = (page) => {
    switch (page) {
      case 'categorias':
        return <CategoriasComponent />;
      case 'ciudades':
        return <CiudadesComponent />;
      case 'estados':
        return <EstadosComponent />;
      case 'paises':
        return <PaisesComponent />;
      case 'promociones':
        return <PromocionesComponent />;
      case 'reservaciones':
        return <ReservacionesComponent />;
      case 'restaurantes':
        return <RestaurantesComponent />;
      case 'usuarios':
        return <UsuariosComponent />;
      default:
        return <div style={{ minHeight: '369px' }}> Eliga una Opcion del Navegador</div>;
    }
  };

  return (
    <>
      <NavBar />
      <section className="page_header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="text-uppercase">Administración</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="d-flex justify-content-center">
        <div className="col-md-10 mb-4 mt-4">
          <div className="element-tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className={adminPage === 'categorias' ? 'active' : ''}>
                <Link
                  onClick={onChangeTabHandler}
                  to="/Administracion/categorias"
                  name="categorias"
                  role="tab"
                  data-toggle="tab"
                >
                  Categorías
                </Link>
              </li>
              <li className={adminPage === 'paises' ? 'active' : ''}>
                <Link
                  onClick={onChangeTabHandler}
                  to="/Administracion/paises"
                  name="paises"
                  role="tab"
                  data-toggle="tab"
                >
                  Paises
                </Link>
              </li>
              <li className={adminPage === 'estados' ? 'active' : ''}>
                <Link
                  onClick={onChangeTabHandler}
                  to="/Administracion/estados"
                  name="estados"
                  role="tab"
                  data-toggle="tab"
                >
                  Estados
                </Link>
              </li>
              <li className={adminPage === 'ciudades' ? 'active' : ''}>
                <Link
                  onClick={onChangeTabHandler}
                  to="/Administracion/ciudades"
                  name="ciudades"
                  role="tab"
                  data-toggle="tab"
                >
                  Ciudades
                </Link>
              </li>
              <li className={adminPage === 'promociones' ? 'active' : ''}>
                <Link
                  onClick={onChangeTabHandler}
                  to="/Administracion/promociones"
                  name="promociones"
                  role="tab"
                  data-toggle="tab"
                >
                  Promociones
                </Link>
              </li>
              <li className={adminPage === 'reservaciones' ? 'active' : ''}>
                <Link
                  onClick={onChangeTabHandler}
                  to="/Administracion/reservaciones"
                  name="reservaciones"
                  role="tab"
                  data-toggle="tab"
                >
                  Reservaciones
                </Link>
              </li>
              <li>
                <Link
                  onClick={onChangeTabHandler}
                  name="restaurantes"
                  to="/Administracion/restaurantes"
                  role="tab"
                  data-toggle="tab"
                >
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link
                  onClick={onChangeTabHandler}
                  name="usuarios"
                  to="/Administracion/usuarios"
                  role="tab"
                  data-toggle="tab"
                >
                  Usuarios
                </Link>
              </li>
            </ul>
            <div className="tab-content">{renderComponent(adminPage)}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
