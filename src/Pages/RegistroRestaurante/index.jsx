/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { RegistroUsuario } from '../../Services/Usuarios/usuarios';
import NavBarra from '../../Layouts/Header/NavBar';
import FooterBarra from '../../Layouts/Footer/Footer';
import InputText from '../../Components/InputText';
import InputSelect from '../../Components/InputSelect';
import { GetAllCategorias } from '../../Services/Categorias/categorias';
import { GetActivePaises } from '../../Services/Paises/paises';
import { GetActiveEstados } from '../../Services/Estados/estados';
import { GetActivesCiudades } from '../../Services/Ciudades/ciudades';
import { RegistrarRestaurante } from '../../Services/Restaurantes/restaurantes';

export default function RegistroRestaurante() {
  const [ciudades, setCiudades] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [paises, setPaises] = useState([]);
  const [estados, setEstados] = useState([]);

  const [restaurante, setRestaurante] = useState({
    _id: '',
    Nombre: '',
    Administrador: JSON.parse(localStorage.getItem('user')),
    Ubicacion: '',
    Pais: '',
    Estado: '',
    Ciudad: '',
    Imagen: '',
    HorarioApertura: -1,
    HorarioCierre: -1,
    PrecioReservacion: 0,
    LugaresTotales: 0,
    UsuarioCreo: JSON.parse(localStorage.getItem('user')),
    FechaCreacion: null,
    UsuarioModifico: '',
    FechaModificacion: null,
    Activo: true,
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setRestaurante({
      ...restaurante,
      [name]: value,
    });
  };

  const onChangeHorarios = (e) => {
    const { value, name } = e.target;
    let horario = value;

    if (name === 'HorarioApertura') {
      horario = parseInt(value.replace(':', ''), 10);
      setRestaurante({
        ...restaurante,
        HorarioApertura: horario,
      });
    } else {
      horario = parseInt(value.replace(':', ''), 10);
      setRestaurante({
        ...restaurante,
        HorarioCierre: horario,
      });
    }
  };

  const onImageHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setRestaurante({
        ...restaurante,
        Imagen: reader.result,
      });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  const onSubmitForm = async () => {
    const userLog = JSON.parse(localStorage.getItem('user'));
    if (typeof userLog === 'string') {
      setRestaurante({ ...restaurante, Administrador: userLog, UsuarioCreo: userLog });

      const { success, message, data } = await RegistrarRestaurante(restaurante);
      console.log(success, message, data);
      if (success) {
        navigate(`/Restaurante/${data._id}`);
      } else {
        console.log(message);
      }
    }
  };

  useEffect(async () => {
    const { success: successCat, data: dataCat } = await GetAllCategorias();
    const { success: successP, data: dataP } = await GetActivePaises();
    const { success: successE, data: dataE } = await GetActiveEstados();
    const { success: successC, data: dataC } = await GetActivesCiudades();

    if (successCat) setCategorias(dataCat);
    if (successP) setPaises(dataP);
    if (successE) setEstados(dataE);
    if (successC) setCiudades(dataC);
  }, []);

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
                              value={restaurante.Nombre}
                            />
                          </div>
                          <div className="col-md-6">
                            <InputSelect
                              name="Categoria"
                              label="Categoría"
                              onChangeText={onChangeHandler}
                              id="Categoria"
                              dataOptions={categorias}
                              obj={restaurante.Categoria}
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
                              value={restaurante.Ubicacion}
                            />
                          </div>
                          <div className="col-md-6">
                            <InputSelect
                              name="Pais"
                              label="Pais"
                              onChangeText={onChangeHandler}
                              id="Pais"
                              dataOptions={paises}
                              obj={restaurante.Pais}
                            />
                          </div>
                          <div className="col-md-6">
                            <InputSelect
                              name="Estado"
                              label="Estado"
                              onChangeText={onChangeHandler}
                              id="Estado"
                              dataOptions={estados}
                              obj={restaurante.Estado}
                            />
                          </div>
                          <div className="col-md-6">
                            <InputSelect
                              name="Ciudad"
                              label="Ciudad"
                              onChangeText={onChangeHandler}
                              id="Ciudad"
                              dataOptions={ciudades}
                              obj={restaurante.Ciudad}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <InputText
                              name="HorarioApertura"
                              label="Horario de Apertura"
                              onChangeText={onChangeHorarios}
                              id="HorarioApertura"
                              value={
                                restaurante.HorarioApertura === -1
                                  ? ''
                                  : restaurante.HorarioApertura.toString()
                              }
                            />
                          </div>
                          <div className="col-md-6">
                            <InputText
                              name="HorarioCierre"
                              label="Horario de Cierre"
                              onChangeText={onChangeHorarios}
                              id="HorarioCierre"
                              value={
                                restaurante.HorarioCierre === -1
                                  ? ''
                                  : restaurante.HorarioCierre.toString()
                              }
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
                              value={restaurante.PrecioReservacion.toString()}
                            />
                          </div>
                          <div className="col-md-6">
                            <InputText
                              name="LugaresTotales"
                              label="Lugares Totales"
                              onChangeText={onChangeHandler}
                              id="LugaresTotales"
                              value={restaurante.LugaresTotales.toString()}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group">
                            <span>Fotografía</span>
                            <input
                              onChange={onImageHandler}
                              name="Imagen"
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
                              onClick={onSubmitForm}
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
