import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Styles/Global/img/logo.png';
import arrDown from '../../Assets/Styles/Global/img/arrow-down.png';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/Global/restaurante.css';
import thumb5 from '../../Assets/Styles/Global/img/thumb5.png';
import thumb6 from '../../Assets/Styles/Global/img/thumb6.png';
import thumb7 from '../../Assets/Styles/Global/img/thumb7.png';
import avatar1 from '../../Assets/Styles/Global/img/xtra/1.jpg';
import avatar2 from '../../Assets/Styles/Global/img/xtra/2.jpg';

export default function Restaurante() {
  return (
    <body>
      <section className="home">
        <div className="tittle-block">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <h1>Tomatillos</h1>
          <h2>Italian Cuisine</h2>
        </div>
        <div className="scroll-down">
          <Link to="/Ayuda">
            <img src={arrDown} alt="down-arrow" />
          </Link>
        </div>
      </section>

      <div className="main-wrapper">
        <section className="about" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="page-header d-flex flex-column align-items-center wow fadeInDown">
                  <h1 className="h1-about mb-1">
                    Tomatillos
                    <br />
                    <small className="h1-about-small">Italian Cuisine</small>
                  </h1>
                  <hr className="bar-under-text mt-0" />
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp">
              <div className="col-md-12">
                <p>
                  Grill destacado por sus carnes, pastas y mariscos en un local decorado con madera
                  rústica y ladrillo expuesto, donde encontrarás la mejor experiencia culinaria de
                  la ciudad.
                </p>
                <br />
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="row col-md-12  justify-content-center">
            <div className="container d-flex flex-column align-items-center col-md-9">
              <div className="row">
                <div className="mt-4 pt-4">
                  <div className="page-header wow fadeInDown center-text">
                    <h1 className="text-white">
                      Nuestros Especiales
                      <small className="h1-about-small text-white">
                        El mejor Sazón de la Ciudad
                      </small>
                    </h1>
                    <hr className="bar-under-text" />
                  </div>
                </div>
              </div>
              <div className="row wow fadeInUp col-10 justify-content-center">
                <div className="col-md-3 col-sm-5">
                  <div className="features-tile">
                    <div className="features-img">
                      <img src={thumb5} alt="" />
                    </div>
                    <div className="features-content">
                      <div className="page-header">
                        <h1 className="features-h1">Hecho con amor</h1>
                      </div>
                      <hr className="bar-under-text" />
                      <p>
                        Vive la mejor experiencia culinaria con nuestro fetuccini Alfredo, servico
                        con crema de 4 quesos y camarones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-5">
                  <div className="features-tile">
                    <div className="features-img">
                      <img src={thumb6} alt="" />
                    </div>
                    <div className="features-content">
                      <div className="page-header">
                        <h1 className="features-h1">Hecho con amor</h1>
                      </div>
                      <hr className="bar-under-text" />
                      <p>
                        Vive la mejor experiencia culinaria con nuestro fetuccini Alfredo, servico
                        con crema de 4 quesos y camarones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-5">
                  <div className="features-tile">
                    <div className="features-img">
                      <img src={thumb7} alt="" />
                    </div>
                    <div className="features-content">
                      <div className="page-header">
                        <h1 className="features-h1">Hecho con amor</h1>
                      </div>
                      <hr className="bar-under-text" />
                      <p>
                        Vive la mejor experiencia culinaria con nuestro fetuccini Alfredo, servico
                        con crema de 4 quesos y camarones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="menu">
          <div className="col-md-9  container d-flex">
            <div className="col-md-4">
              <div className="menu-btn">
                <Link type="button" className="btn btn-default btn-lg" to="/Menu">
                  Nuestro Menú
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="menu-btn">
                <Link type="button" className="btn btn-default btn-lg" to="/Reservacion">
                  Hacer Reservación
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <div className="blog-content">
          <div className="col-md-9  container">
            <div className="row">
              <div className="col-md-9">
                <div className="comments-area">
                  <h3>3 Comentarios</h3>
                  <ul className="commentlist">
                    <li>
                      <div className="comment">
                        <span className="comment-image">
                          <img src={avatar1} className="avatar" height="70" width="70" alt="" />
                        </span>
                        <span className="comment-info d-text-c">
                          <span>
                            Hace 5 días &nbsp; / &nbsp;
                            <a className="comment-reply-link d-text-c" href="./RESTAURANT.html">
                              Responder
                            </a>
                          </span>
                          Gabriel Martínez
                        </span>
                        <p>Me encantó, volvería a ir.</p>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comment">
                            <span className="comment-image">
                              <img src={avatar2} className="avatar" height="70" width="70" alt="" />
                            </span>
                            <span className="comment-info d-text-c">
                              <span>
                                Hace 3 días &nbsp; / &nbsp;
                                <a className="comment-reply-link d-text-c" href="./RESTAURANT.html">
                                  Responder
                                </a>
                              </span>
                              Marisela Ortíz
                            </span>
                            <p>Llevé a mi esposo para nuestro aniversario, buenísimo.</p>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment">
                        <span className="comment-image">
                          <img src={avatar1} className="avatar" height="70" width="70" alt="" />
                        </span>
                        <span className="comment-info d-text-c">
                          <span>
                            Hace 1 día &nbsp; / &nbsp;
                            <a className="comment-reply-link d-text-c" href="./RESTAURANT.html">
                              Responder
                            </a>
                          </span>
                          Marcelo José
                        </span>
                        <p>Muy bueno.</p>
                      </div>
                    </li>
                  </ul>
                  <div id="respond" className="comment-respond">
                    <h3>Deja un Comentario</h3>
                    <form method="post" id="commentform" className="comment-form">
                      <div className="row col-md-12">
                        <div className="col-md-12">
                          <textarea className="textarea-comment col-12" placeholder="Comentario" />
                        </div>
                        <div className="col-md-12">
                          <button type="button" className="btn btn-default btn-block">
                            Enviar Comentario
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
