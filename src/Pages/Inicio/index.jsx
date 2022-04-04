import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/Styles/Global/css/main.css';
import '../../Assets/Styles/Global/css/bootstrap.min.css';
// import '../../Assets/Styles/Global/css/plugin.css';
import '../../Assets/Styles/Global/css/font-awesome/css/font-awesome.css';

function Inicio() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <section className="home">
          <div className="tittle-block">
            <div className="logo">
              <Link to="/">
                <img src="../../Assets/Styles/Global/img/logo.png" alt="" />
              </Link>
              <h1>Encuentra El Mejor Restaurante</h1>
              <h2>Haz la reservación para tu lugar favorito</h2>

              <div className="scroll-down">
                <Link to="/Ayuda">
                  <img src="../../Assets/Styles/Global/img/arrow-down.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="special">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-header wow fadeInDown">
                  <h1 className="white">Top Ofertas Hoy</h1>
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp">
              <div className="col-md-offset-1 col-md-10">
                <div className="flexslider special-slider">
                  <ul className="slides">
                    <li>
                      <div className="slider-img">
                        <img src="img/thumb4.png" alt="" />
                      </div>
                      <div className="slider-content">
                        <div className="page-header">
                          <h1>
                            Pasta Alfredo<small>Fetuccini con crema de queso y camarón.</small>
                          </h1>
                        </div>
                        <p>Encuentra más ofertas en platillos en los menús de cada restaurante.</p>
                        <a className="btn btn-default" href="./index.html" role="button">
                          Ver
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="slider-img">
                        <img src="img/thumb4.png" alt="" />
                      </div>
                      <div className="slider-content">
                        <div className="page-header">
                          <h1>
                            Pasta Alfredo<small>Fetuccini con crema de queso y camarón.</small>
                          </h1>
                        </div>
                        <p>Encuentra más ofertas en platillos en los menús de cada restaurante.</p>
                        <a className="btn btn-default" href="./index.html" role="button">
                          Ver
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="slider-img">
                        <img src="img/thumb4.png" alt="" />
                      </div>
                      <div className="slider-content">
                        <div className="page-header">
                          <h1>
                            Pasta Alfredo<small>Fetuccini con crema de queso y camarón.</small>
                          </h1>
                        </div>
                        <p>Encuentra más ofertas en platillos en los menús de cada restaurante.</p>
                        <a className="btn btn-default" href="./index.html" role="button">
                          Ver
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="direction-nav hidden-sm">
                    <div className="next">
                      <a href="./">
                        <img src="img/right-arrow.png" alt="" />
                      </a>
                    </div>
                    <div className="prev">
                      <a href="./">
                        <img src="img/left-arrow.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Inicio;
