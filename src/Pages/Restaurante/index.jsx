/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../Assets/Styles/Global/img/logo.png';
import arrDown from '../../Assets/Styles/Global/img/arrow-down.png';
import '../../Assets/Styles/Global/global.css';
import '../../Assets/Styles/Global/restaurante.css';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';
import { GetRestauranteById } from '../../Services/Restaurantes/restaurantes';
import { GetDescripcionRestaurante } from '../../Services/Descripciones/descripcionesRestaurantes';
import { GetItemsMenuByRestaurante } from '../../Services/ItemsMenu/itemsMenu';
import {
  CanComentar,
  CrearComentario,
  GetComentariosByRestaurante,
} from '../../Services/Comentarios/comentarios';

export default function Restaurante() {
  // eslint-disable-next-line no-unused-vars
  const { restaurante: restauranteId } = useParams();
  const [canComentar, setCanComentar] = useState(false);
  const [comentario, setComentario] = useState({
    _id: '',
    UsuarioReview: JSON.parse(localStorage.getItem('user')),
    Restaurante: restauranteId,
    Comentario: '',
    FechaCalificacion: null,
    Activo: true,
  });
  const [comentarios, setComentarios] = useState([]);
  const [items, setItems] = useState([]);
  const [descripcion, setDescripcion] = useState({
    _id: '',
    Restaurante: '',
    Descripcion: '',
    FechaCreacion: '',
    UsuarioCreo: '',
    FechaModificacion: '',
    UsuarioModifico: '',
  });
  const [restaurante, setRestaurante] = useState({
    _id: '',
    Nombre: '',
    Categoria: {
      _id: '',
      Nombre: '',
    },
    Administrador: {
      _id: '',
      Nombre: '',
    },
    Ubicacion: '',
    Pais: {
      _id: '',
      Nombre: '',
    },
    Estado: {
      _id: '',
      Nombre: '',
    },
    Ciudad: {
      _id: '',
      Nombre: '',
    },
    Imagen: '',
    HorarioApertura: -1,
    HorarioCiere: -1,
    PrecioReservacion: 0,
    LugaresTotales: 0,
    UsuarioCreo: '',
    FechaCreacion: '',
    UsuarioModifico: null,
    FechaModificacion: null,
    Activo: true,
  });

  const onHandleComment = (e) => {
    setComentario({ ...comentario, Comentario: e.target.value });
  };

  const onSubmitComment = async () => {
    const { success, data } = await CrearComentario(comentario);
    if (success) {
      const { success: c, data: dc } = await GetComentariosByRestaurante(restauranteId);
      if (c) {
        setComentarios(dc);
      } else {
        console.log(dc);
      }
    } else {
      console.log(data);
    }
  };

  const fechaToDateTime = (fecha) => {
    const _fecha = new Date(fecha).toLocaleString();
    return _fecha;
  };
  useEffect(async () => {
    const { success, message, data } = await GetRestauranteById(restauranteId);

    if (success) {
      setRestaurante(data);
    } else {
      console.log(message);
    }

    const {
      success: sDesc,
      message: mDesc,
      data: dDesc,
    } = await GetDescripcionRestaurante(restauranteId);

    if (sDesc) {
      setDescripcion(dDesc);
    } else {
      console.log(mDesc);
    }

    const {
      success: sItem,
      message: mItem,
      data: dItem,
    } = await GetItemsMenuByRestaurante(restauranteId);

    if (sItem) {
      setItems(dItem);
    } else {
      console.log(mItem);
    }

    const user = JSON.parse(localStorage.getItem('user'));
    const { success: sCC, message: mCC, data: dCC } = await CanComentar(user, restauranteId);
    if (sCC) {
      setCanComentar(dCC);
    } else {
      console.log(mCC);
    }

    const { success: c, data: dc } = await GetComentariosByRestaurante(restauranteId);
    if (c) {
      setComentarios(dc);
    } else {
      console.log(dc);
    }
  }, []);

  if (restaurante._id !== '' || items.length < 1) {
    return (
      <>
        <NavBarra />
        <section className="home">
          <div className="tittle-block">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <h1>{restaurante.Nombre}</h1>
            <h2>{descripcion.Slogan}</h2>
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
                      {restaurante.Nombre}
                      <br />
                      <small className="h1-about-small">{restaurante.Categoria.Nombre}</small>
                    </h1>
                    <hr className="bar-under-text mt-0" />
                  </div>
                </div>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-md-12">
                  <p>{descripcion.Descripcion}</p>
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
                  {items.map((i) => {
                    if (i.Especial) {
                      return (
                        <div key={i._id} className="col-md-3 col-sm-5">
                          <div className="features-tile">
                            <div className="features-img">
                              <img src={i.Imagen} alt="" />
                            </div>
                            <div className="features-content">
                              <div className="page-header">
                                <h1 className="features-h1">{i.Nombre}</h1>
                              </div>
                              <hr className="bar-under-text" />
                              <p>{i.Descripcion}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={i._id} className="">
                        {' '}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section className="menu">
            <div className="col-md-9  container d-flex">
              <div className="col-md-4">
                <div className="menu-btn">
                  <Link
                    type="button"
                    className="btn btn-default btn-lg"
                    to={`/Menu/${restauranteId}`}
                  >
                    Nuestro Menú
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="menu-btn">
                  <Link
                    type="button"
                    className="btn btn-default btn-lg"
                    to={`/Reservacion/${restauranteId}`}
                  >
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
                    <h3>{comentarios.length} Comentarios</h3>
                    <ul className="commentlist">
                      {comentarios.map((c) => (
                        <li key={c._id}>
                          <div className="comment mb-4">
                            <span className="comment-image">
                              <img
                                src={c.UsuarioReview.Imagen}
                                className="avatar"
                                height="70"
                                width="70"
                                alt=""
                              />
                            </span>
                            <span className="comment-info d-text-c">
                              <span>{fechaToDateTime(c.FechaCalificacion)} </span>
                              {c.UsuarioReview.Nombre}
                            </span>
                            <p>{c.Comentario}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {canComentar ? (
                      <div id="respond" className="comment-respond">
                        <h3>Deja un Comentario</h3>
                        <form method="post" id="commentform" className="comment-form">
                          <div className="row col-md-12">
                            <div className="col-md-12">
                              <textarea
                                onChange={onHandleComment}
                                className="textarea-comment col-12"
                                placeholder="Comentario"
                                value={comentario.Comentario}
                              />
                            </div>
                            <div className="col-md-12">
                              <button
                                type="button"
                                onClick={onSubmitComment}
                                className="btn btn-default btn-block"
                              >
                                Enviar Comentario
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div> </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterBarra />
      </>
    );
  }
  return (
    <>
      <NavBarra />
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

      <section>Cargando...</section>

      <FooterBarra />
    </>
  );
}
