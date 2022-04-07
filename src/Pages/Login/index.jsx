/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {} from 'reactstrap';
import '../../Assets/Styles/Global/inicio.css';
import { IniciarSesion } from '../../Services/Usuarios/usuarios';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  return (
    <div className="body">
      <NavBarra />
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
                      <h3 className="text-center">Ingresa a Take Seat</h3>
                      <br />
                      <form className="logregform">
                        <div className="row">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label htmlFor="emailLogin">Correo Electrónico</label>
                              <input
                                onChange={(e) => {
                                  setCorreo(e.target.value);
                                }}
                                id="emailLogin"
                                type="text"
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
                                onChange={(e) => {
                                  setPass(e.target.value);
                                }}
                                id="passwLogin"
                                type="password"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row">
                          <div className="col-md-12">
                            <button
                              onClick={() => {
                                if (IniciarSesion(correo, pass)) {
                                  navigate('/');
                                }
                              }}
                              type="button"
                              className="btn btn-default pull-right"
                            >
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
      <FooterBarra />
    </div>
  );
}
