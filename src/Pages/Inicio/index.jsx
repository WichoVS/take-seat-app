/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {} from 'reactstrap';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/Global/inicio.css';
import logo from '../../Assets/Styles/Global/img/logo.png';
import scroll from '../../Assets/Styles/Global/img/arrow-down.png';
import { GetAllRestaurantes } from '../../Services/Restaurantes/restaurantes';
import Header from '../../Layouts/Header/NavBar';

function Inicio() {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(async () => {
    const { success, message, data } = await GetAllRestaurantes();
    if (success) {
      setRestaurantes(data);
    } else {
      console.log(message);
    }
  }, []);

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
              {restaurantes.map((r) => (
                <div
                  key={r._id}
                  className="col-md-4 d-flex flex-column align-items-center restaurant-card"
                >
                  <img src={r.Imagen} alt="" />
                  <div className="rc-info rc-info-div">
                    <h4 className="rc-info-h4">{r.Nombre}</h4>
                    <div className="rc-ratings">
                      <span className="material-icons star-active">grade</span>
                      <span className="material-icons star-active">grade</span>
                      <span className="material-icons star-active">grade</span>
                      <span className="material-icons star-active">grade</span>
                      <span className="material-icons star-inactive">grade</span>
                    </div>
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
