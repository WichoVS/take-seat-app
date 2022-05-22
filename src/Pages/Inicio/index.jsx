/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/Global/inicio.css';
import logo from '../../Assets/Styles/Global/img/logo.png';
import scroll from '../../Assets/Styles/Global/img/arrow-down.png';
import { GetAllRestaurantes } from '../../Services/Restaurantes/restaurantes';
import Header from '../../Layouts/Header/NavBar';

function Inicio() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [usuariolog] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(async () => {
    if (usuariolog !== null) {
      const { success, message, data } = await GetAllRestaurantes();
      if (success) {
        setRestaurantes(data);
      } else {
        console.log(message);
      }
    }
  }, [usuariolog]);

  const navigate = useNavigate();

  const toInicioSesion = () => {
    navigate('/Login');
  };

  const toRegistro = () => {
    navigate('/Registro');
  };

  return (
    <div className="body">
      <div className="main-wrapper">
        <Header />
        <div className="home">
          <div className="tittle-block">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <h1>Encuentra El Mejor Restaurante</h1>
            <h2>Haz la reservación para tu lugar favorito</h2>
          </div>
          <div className="scroll-down">
            <Link to="/Ayuda">
              <img src={scroll} alt="Logo" />
            </Link>
          </div>
        </div>

        <section className="recipie-content ">
          <div className="container col-md-11">
            <div className="row justify-content-center">
              {usuariolog === null ? (
                <>
                  <h2>Para ver el portar de Take Seat es necesario estár registrado</h2>
                  <div className="col-10 d-flex justify-content-around">
                    <div>
                      <button type="button" onClick={toInicioSesion} className="btn btn-default">
                        Iniciar Sesión
                      </button>
                    </div>
                    <div>
                      <button type="button" onClick={toRegistro} className="btn btn-default">
                        Registrarse
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div> </div>
              )}
              {restaurantes.map((r) => (
                <div
                  key={r._id}
                  className="col-md-4 d-flex flex-column align-items-center restaurant-card"
                >
                  <img src={r.Imagen} alt="" />
                  <div className="rc-info rc-info-div">
                    <h4 className="rc-info-h4">{r.Nombre}</h4>
                    <Link to={`/Restaurante/${r._id}`} className="btn btn-default">
                      Ver
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <hr />

            <div className="clearfix" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Inicio;
