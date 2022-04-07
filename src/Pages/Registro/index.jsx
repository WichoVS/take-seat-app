/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {} from 'reactstrap';
import '../../Assets/Styles/Global/profile.css';
import '../../Assets/Pantallas/HTML/css/plugin.css';
import '../../Assets/Pantallas/HTML/css/bootstrap.min.css';

export default function Registro() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Crear Cuenta</h2>
              </div>
            </div>
          </div>
        </section>

        <section id="content-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="register-box">
                  <div className="title-section">
                    <h1>
                      <span>Regístrate</span>
                    </h1>
                  </div>
                  <form id="register-form">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="first-name">Nombre</label>
                        <input id="first-name" name="first-name" type="text" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="last-name">Apellido</label>
                        <input id="last-name" name="last-name" type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="email">E-mail</label>
                        <input id="email" name="email" type="text" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="username2">Nombre de Usuario</label>
                        <input id="username2" name="username" type="text" />
                      </div>
                    </div>
                    <label htmlFor="password2">Contraseña</label>
                    <input id="password2" name="password" type="password" />
                    <div className="user-thumbnail">
                      <input type="file" name="user-thumb" id="user-thumb" />
                      <span>Fotografía</span>
                      <div className="thumb-holder" />
                    </div>
                    <button type="submit" id="submit-register2">
                      <i className="fa fa-paper-plane" /> Regístrate
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="footer-copyrights">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <i className="fa fa-copyright" />
                    Take seat
                    <i className="fa fa-heart primary-color" />
                    by Programación Web 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
