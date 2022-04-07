/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {} from 'reactstrap';
// import '../../Assets/Styles/Global/profile.css';
// import '../../Assets/Pantallas/HTML/css/plugin.css';

export default function Perfil() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <section className="page_header login">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Administra tu Cuenta</h2>
              </div>
            </div>
          </div>
        </section>

        <section className="shop-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row shop-login">
                  <div className="col-md-2" />
                  <div className="col-md-9">
                    <div className="box-content">
                      <h3 className="text-center">Tus datos</h3>
                      <br />
                      <form className="logregform">
                        <div className="row">
                          <div className="form-group">
                            <input type="file" className="form-control" id="user-thumb" />
                            <span>Fotografía</span>
                            <div className="thumb-holder" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="first-name">Nombre</label>
                              <input className="form-control" id="first-name" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="last-name">Apellido</label>
                              <input id="last-name" className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="email">E-mail</label>
                              <input id="email" className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username2">Nombre de Usuario</label>
                              <input id="username2" className="form-control" type="text" />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="password2">Contraseña</label>
                              <input id="password2" className="form-control" type="password" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-4">
                            <button type="submit" className="btn btn-default pull-right">
                              Guardar
                            </button>
                          </div>

                          <div className="col-md-4">
                            <button type="submit" className="btn btn-default pull-right">
                              Eliminar cuenta
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
