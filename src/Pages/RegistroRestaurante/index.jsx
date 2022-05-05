import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegistroUsuario } from '../../Services/Usuarios/usuarios';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';
import InputText from '../../Components/InputText';
import InputSelect from '../../Components/InputSelect';

export default function RegistroRestaurante() {
  const [userReg, setUserReg] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    usuario: '',
    password: '',
    imagen: '',
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUserReg({
      ...userReg,
      [name]: value,
    });
  };

  return (
    <div className="body">
      <NavBarra />
      <div className="main-wrapper">
        <section className="page_header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Crear Cuenta de Restaurante</h2>
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
                            <InputText
                              name="Nombre"
                              label="Restaurante"
                              onChangeText={onChangeHandler}
                              id="Nombre"
                            />
                          </div>
                          <div className="col-md-6">
                            <InputText
                              name="Administrador"
                              label="Administrador"
                              onChangeText={onChangeHandler}
                              id="Administrador"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <InputText
                              name="Ubicacion"
                              label="Ubicacion"
                              onChangeText={onChangeHandler}
                              id="Ubicacion"
                            />
                          </div>
                          <div className="col-md-6">
                            <InputSelect
                              name="Pais"
                              label="Pais"
                              onChangeText={onChangeHandler}
                              id="Pais"
                            />
                          </div>
                          <div className="col-md-6">
                            <InputSelect
                              name="Estado"
                              label="Estado"
                              onChangeText={onChangeHandler}
                              id="Estado"
                            />
                          </div>
                          <div className="col-md-6">
                            <InputSelect
                              name="Ciudad"
                              label="Ciudad"
                              onChangeText={onChangeHandler}
                              id="Ciudad"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <InputText
                              name="HorarioApertura"
                              label="Horario de Apertura"
                              onChangeText={onChangeHandler}
                              id="HorarioApertura"
                            />
                          </div>
                          <div className="col-md-6">
                            <InputText
                              name="HorarioCierre"
                              label="Horario de Cierre"
                              onChangeText={onChangeHandler}
                              id="HorarioCierre"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <InputText
                              name="PrecioReservacion"
                              label="Precio de Reservación"
                              onChangeText={onChangeHandler}
                              id="PrecioReservacion"
                            />
                          </div>
                          <div className="col-md-6">
                            <InputText
                              name="LugaresTotales"
                              label="Lugares Totales"
                              onChangeText={onChangeHandler}
                              id="LugaresTotales"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group">
                            <span>Fotografía</span>
                            <input
                              onChange={onChangeHandler}
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
