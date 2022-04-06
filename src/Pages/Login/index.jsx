/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {} from 'reactstrap';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/Global/inicio.css';
import '../../Assets/Styles/Global/login.css';
import '../../Assets/Pantallas/HTML/css/plugin.css';
import '../../Assets/Pantallas/HTML/css/bootstrap.min.css';

export default function Login() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <section className="page_header login">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Inicia sesión</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="shop-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row shop-login">
                  <div className="col-md-3" />
                  <div className="col-md-6">
                    <div className="box-content">
                      <h3 className="text-center">Usuario Existente</h3>
                      <br />
                      <form className="logregform">
                        <div className="row">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label htmlFor="emailLogin">Correo Electrónico</label>
                              <input
                                id="emailLogin"
                                type="text"
                                value=""
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label htmlFor="passwLogin">Contraseña</label>
                              <input
                                id="passwLogin"
                                type="password"
                                value=""
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                          <div className="col-md-12">
                            <button type="submit" className="btn btn-default pull-right">
                              Entrar
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
        </section>
      </div>
    </div>
  );
}
