/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GetUsuario, GetUsuarioRestaurante } from '../../Services/Usuarios/usuarios';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';

// import '../../Assets/Styles/Global/profile.css';
// import '../../Assets/Pantallas/HTML/css/plugin.css';

export default function Perfil() {
  // eslint-disable-next-line no-unused-vars
  const [usuario, setUsuario] = useState({
    _id: '',
    Imagen: '',
    Correo: '',
    Nombre: '',
    Usuario: '',
  });

  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState('');
  const handleUsuario = (e) => {
    const { value, name } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const onImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setUsuario({
        ...usuario,
        Imagen: reader.result,
      });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  useEffect(async () => {
    const { success, message, data } = await GetUsuario();
    if (success) {
      setUsuario(data);
    } else {
      Swal.fire({ icon: 'error', text: message });
    }

    const { success: sR, message: mR, data: dR } = await GetUsuarioRestaurante();
    if (sR) {
      setRestaurant(dR);
    } else {
      Swal.fire({ icon: 'error', text: mR });
    }
  }, []);

  const onClickRestaurante = () => {
    if (restaurant !== '') {
      navigate(`/RestauranteAdministracion/${restaurant}`);
    } else {
      navigate('/RegistroRestaurante');
    }
  };

  const onSave = () => {};

  return (
    <div className="body">
      <NavBarra />
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
                            <input
                              onChange={onImageChange}
                              type="file"
                              className="form-control"
                              id="user-thumb"
                            />
                            <span>Fotografía</span>
                            <div className="thumb-holder" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="first-name">Nombre</label>
                              <input
                                name="Nombre"
                                onChange={handleUsuario}
                                value={usuario.Nombre || ''}
                                className="form-control"
                                id="first-name"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="email">E-mail</label>
                              <input
                                name="Correo"
                                onChange={handleUsuario}
                                value={usuario.Correo || ''}
                                id="email"
                                className="form-control"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="username2">Nombre de Usuario</label>
                              <input
                                name="Usuario"
                                onChange={handleUsuario}
                                value={usuario.Usuario || ''}
                                id="username2"
                                className="form-control"
                                type="text"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="password2">Contraseña</label>
                              <input id="password2" className="form-control" type="password" />
                            </div>
                          </div>
                        </div>

                        <div className="row col-12 justify-content-center">
                          <div className="d-flex col-10 justify-content-between">
                            <div className="col-md-3">
                              <button
                                onClick={onSave}
                                type="button"
                                className="btn btn-default pull-right"
                              >
                                Guardar
                              </button>
                            </div>
                            <div className="col-md-3">
                              <button type="button" className="btn btn-default pull-right">
                                Eliminar cuenta
                              </button>
                            </div>
                            {restaurant ? (
                              <div className="col-md-3">
                                <button
                                  onClick={onClickRestaurante}
                                  type="button"
                                  className="btn btn-default pull-right"
                                >
                                  Restaurante
                                </button>
                              </div>
                            ) : (
                              <div className="col-md-3">
                                <button
                                  onClick={onClickRestaurante}
                                  type="button"
                                  className="btn btn-default pull-right"
                                >
                                  Registrar Restaurant
                                </button>
                              </div>
                            )}
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
