/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegistroUsuario } from '../../Services/Usuarios/usuarios';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';
// import '../../Assets/Styles/Global/profile.css';
// import '../../Assets/Pantallas/HTML/css/plugin.css';

export default function Registro() {
  const [userReg, setUserReg] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    usuario: '',
    password: '',
    imagen: '',
  });
  const navigate = useNavigate();

  const handleUser = (e) => {
    const { value, name } = e.target;
    setUserReg({
      ...userReg,
      [name]: value,
    });
  };

  const onImageHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUserReg({
        ...userReg,
        imagen: reader.result,
      });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  return (
    <div className="body">
      <NavBarra />
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

        <section className="shop-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row shop-login">
                  <div className="col-md-2" />
                  <div className="col-md-9">
                    <div className="box-content">
                      <h3 className="text-center">Regístrate</h3>
                      <br />
                      <form className="logregform">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="first-name-reg">Nombre(s)</label>
                              <input
                                onChange={handleUser}
                                name="nombre"
                                className="form-control"
                                id="first-name-reg"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="last-name-reg">Apellido(s)</label>
                              <input
                                onChange={handleUser}
                                name="apellido"
                                id="last-name-reg"
                                className="form-control"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="email-reg">E-mail</label>
                              <input
                                onChange={handleUser}
                                name="correo"
                                id="email-reg"
                                className="form-control"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username-reg">Nombre de Usuario</label>
                              <input
                                onChange={handleUser}
                                name="usuario"
                                id="username-reg"
                                className="form-control"
                                type="text"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="password-reg">Contraseña</label>
                              <input
                                onChange={handleUser}
                                name="password"
                                id="password-reg"
                                className="form-control"
                                type="password"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group">
                            <span>Fotografía</span>
                            <input
                              onChange={onImageHandler}
                              name="imagen"
                              type="file"
                              className="form-control"
                              id="user-thumb-reg"
                            />
                            <div className="thumb-holder" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <button
                              onClick={() => {
                                if (
                                  RegistroUsuario(
                                    userReg.nombre,
                                    userReg.correo,
                                    userReg.usuario,
                                    userReg.password,
                                    userReg.imagen,
                                  )
                                ) {
                                  navigate('/');
                                }
                              }}
                              type="button"
                              className="btn btn-default pull-right"
                            >
                              Confirmar Registro
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
