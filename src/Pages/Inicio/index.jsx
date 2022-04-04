/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import {} from 'reactstrap';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/Global/inicio.css';
import logo from '../../Assets/Styles/Global/img/logo.png';
import scroll from '../../Assets/Styles/Global/img/arrow-down.png';
import thumb4 from '../../Assets/Styles/Global/img/thumb4.png';
import leftArr from '../../Assets/Styles/Global/img/left-arrow.png';
import rightArr from '../../Assets/Styles/Global/img/right-arrow.png';
import recipie3 from '../../Assets/Styles/Global/img/recipie/3.jpg';
import recipie4 from '../../Assets/Styles/Global/img/recipie/4.jpg';
import recipie5 from '../../Assets/Styles/Global/img/recipie/5.jpg';

//  import bg3 from '../../Assets/Styles/Global/img/bg3.png';

function Inicio() {
  return (
    <div className="body">
      <div className="main-wrapper">
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

        <section className="special d-flex flex-column align-items-center">
          <div className="col-md-12 row">
            <div className="col-md-12">
              <div className="page-header wow fadeInDown d-flex align-items-center flex-column">
                <h1 className="text-white">Top Ofertas Hoy</h1>
                <hr className="bar-under-text" />
              </div>
            </div>
          </div>
          <div className="col-md-10 d-flex justify-content-md-center align-items-center">
            <div className="mx-4 cursor-pointer">
              <img src={leftArr} alt="" />
            </div>
            <div className="card-carousel card d-flex flex-row">
              <div className="slider-img ">
                <img className="img-fluid" src={thumb4} alt="" />
              </div>
              <div className="slider-content px-4 pt-4">
                <div className="page-header">
                  <h1 className="h1-carousel">
                    Pasta Alfredo
                    <br />
                    <small>Fetuccini con crema de queso y camarón.</small>
                    <hr className="bar-under-text" />
                  </h1>
                </div>
                <p className="p-carousel text-wrap">
                  Encuentra más ofertas en platillos en los menús de cada restaurante.
                </p>
                <button type="button" className="btn btn-default" href="./index.html">
                  Ver
                </button>
              </div>
            </div>
            <div className="mx-4 cursor-pointer">
              <img src={rightArr} alt="" />
            </div>
          </div>
        </section>

        <section className="recipie-content ">
          <div className="container col-md-11">
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex flex-column align-items-center restaurant-card">
                <img src={recipie3} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">Italianni&apos;s</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center restaurant-card">
                <img src={recipie4} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">AppleBees</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center restaurant-card">
                <img src={recipie5} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">Giardinno&apos;s</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex flex-column restaurant-card">
                <img src={recipie3} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">Wok Oriental Food</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column restaurant-card">
                <img src={recipie4} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">Olive Garden</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column restaurant-card">
                <img src={recipie5} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">Tomatillos</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex flex-column restaurant-card">
                <img src={recipie3} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">Italianni&apos;s</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column restaurant-card">
                <img src={recipie4} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">AppleBees</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default">
                    Ver
                  </a>
                </div>
              </div>
              <div className="col-md-4 d-flex flex-column restaurant-card">
                <img src={recipie5} alt="" />
                <div className="rc-info rc-info-div">
                  <h4 className="rc-info-h4">Giardinno&apos;s</h4>
                  <div className="rc-ratings">
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-active">grade</span>
                    <span className="material-icons star-inactive">grade</span>
                  </div>
                  <a href="./RESTAURANT.html" className="btn btn-default ">
                    Ver
                  </a>
                </div>
              </div>
            </div>

            <hr />

            <div className="clearfix" />
            <div className="d-flex justify-content-center">
              <ul className="pagi_nation">
                <li className="pagina-circle active">
                  <a className="pagina-a pagina-a-active" href="./INICIO.html">
                    1
                  </a>
                </li>
                <li className="pagina-circle">
                  <a className="pagina-a" href="./INICIO.html">
                    2
                  </a>
                </li>
                <li className="pagina-circle">
                  <a className="pagina-a" href="./INICIO.html">
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Inicio;
