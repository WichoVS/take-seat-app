import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Layouts/Header/NavBar';
import Footer from '../../Layouts/Footer/Footer';
import InformacionComponent from '../../Components/Restaurante/Informacion';
import MenuComponent from '../../Components/Restaurante/Menu';
import ReservacionesComponent from '../../Components/Restaurante/Reservaciones';
import DescripcionComponent from '../../Components/Restaurante/Descripcion';

export default function RestauranteAdministracion() {
  const [adminTabPage, setAdminTabPage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { tab } = useParams();

  const onChangeTabHandler = ({ target }) => {
    setAdminTabPage(target.name);
  };

  const renderComponent = (page) => {
    switch (page) {
      case 'Informacion':
        return (
          <>
            <InformacionComponent />
            <DescripcionComponent />
          </>
        );
      case 'Menu':
        return <MenuComponent />;
      case 'Reservaciones':
        return <ReservacionesComponent />;
      default:
        return (
          <div style={{ minHeight: '369px' }} className="col-10 mt-4 text-center">
            <h4>Eliga una Opcion de las Tabs</h4>
          </div>
        );
    }
  };

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Administracion de Restaurante</h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="d-flex justify-content-center">
            <div className="col-md-10 mb-4 mt-4 ">
              <div className="element-tab">
                <ul className="nav nav-tabs col-12" role="tablist">
                  <li className={adminTabPage === 'Informacion' ? 'active col-3 p-0' : 'col-3 p-0'}>
                    <button
                      className="col-12 btn"
                      onClick={onChangeTabHandler}
                      type="button"
                      name="Informacion"
                    >
                      Información
                    </button>
                  </li>
                  <li className={adminTabPage === 'Menu' ? 'active col-3 p-0' : 'col-3 p-0'}>
                    <button
                      className="col-12 btn"
                      onClick={onChangeTabHandler}
                      name="Menu"
                      type="button"
                    >
                      Menú
                    </button>
                  </li>
                  <li
                    className={adminTabPage === 'Reservaciones' ? 'active col-3 p-0' : 'col-3 p-0'}
                  >
                    <button
                      className="col-12 btn"
                      onClick={onChangeTabHandler}
                      type="button"
                      name="Reservaciones"
                    >
                      Reservaciones
                    </button>
                  </li>
                </ul>
                <div className="tab-content">{renderComponent(adminTabPage)}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
