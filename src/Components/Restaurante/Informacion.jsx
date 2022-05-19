/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GetAllCategorias } from '../../Services/Categorias/categorias';
import { GetAllCiudades } from '../../Services/Ciudades/ciudades';
import { GetAllEstados } from '../../Services/Estados/estados';
import { GetAllPaises } from '../../Services/Paises/paises';
import { GetRestauranteById, UpdateRestaurante } from '../../Services/Restaurantes/restaurantes';

import InputSelect from '../InputSelect';
import InputText from '../InputText';

export default function InformacionComponent() {
  const [informacion, setInformacion] = useState({
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
    HorarioCierre: -1,
    PrecioReservacion: 0,
    LugaresTotales: 0,
    UsuarioCreo: '',
    FechaCreacion: '',
    UsuarioModifico: '',
    FechaModificacion: '',
    Activo: true,
  });

  const [updInformacion, setUpdInformacion] = useState({
    _id: '',
    Nombre: '',
    Categoria: '',
    Administrador: '',
    Ubicacion: '',
    Pais: '',
    Estado: '',
    Ciudad: '',
    Imagen: '',
    HorarioApertura: -1,
    HorarioCierre: -1,
    PrecioReservacion: 0,
    LugaresTotales: 0,
    UsuarioCreo: '',
    FechaCreacion: '',
    UsuarioModifico: '',
    FechaModificacion: '',
    Activo: true,
  });
  const [categorias, setCategorias] = useState([]);
  const [paises, setPaises] = useState([]);
  const [estados, setEstados] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  const { restaurante: restauranteId } = useParams();

  useEffect(async () => {
    const { success: sCat, message: mCat, data: dCat } = await GetAllCategorias();
    if (sCat) {
      setCategorias(dCat);
    } else {
      console.log(mCat);
    }

    const { success: sInfo, message: mInfo, data: dInfo } = await GetRestauranteById(restauranteId);
    if (sInfo) {
      setUpdInformacion({
        _id: dInfo._id,
        Nombre: dInfo.Nombre,
        Categoria: dInfo.Categoria._id,
        Administrador: dInfo.Administrador._id,
        Ubicacion: dInfo.Ubicacion,
        Pais: dInfo.Pais._id,
        Estado: dInfo.Estado._id,
        Ciudad: dInfo.Ciudad._id,
        Imagen: dInfo.Imagen,
        HorarioApertura: dInfo.HorarioApertura,
        HorarioCierre: dInfo.HorarioCierre,
        PrecioReservacion: dInfo.PrecioReservacion,
        LugaresTotales: dInfo.LugaresTotales,
        UsuarioCreo: dInfo.UsuarioCreo,
        FechaCreacion: dInfo.FechaCreacion,
        UsuarioModifico: dInfo.UsuarioModifico,
        FechaModificacion: null,
        Activo: true,
      });
    } else {
      console.log(mInfo);
    }

    const { success: sPais, message: mPais, data: dPais } = await GetAllPaises();
    if (sPais) {
      setPaises(dPais);
    } else {
      console.log(mPais);
    }

    const { success: sState, message: mState, data: dState } = await GetAllEstados();
    if (sState) {
      setEstados(dState);
    } else {
      console.log(mState);
    }

    const { success: sCity, message: mCity, data: dCity } = await GetAllCiudades();
    if (sCity) {
      setCiudades(dCity);
    } else {
      console.log(mCity);
    }
  }, []);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    console.log(name);
    setUpdInformacion({
      ...updInformacion,
      [name]: value,
    });
  };

  const onChangeHorarios = (e) => {
    const { value, name } = e.target;
    let horario = value;
    horario = parseInt(value.replace(':', ''), 10);
    if (name === 'HorarioApertura') {
      setUpdInformacion({
        ...updInformacion,
        HorarioApertura: horario,
      });
    } else {
      setUpdInformacion({
        ...updInformacion,
        HorarioCierre: horario,
      });
    }
  };

  const onImageHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUpdInformacion({
        ...updInformacion,
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
      setUpdInformacion({
        ...updInformacion,
        Administrador: userLog,
        UsuarioModifico: userLog,
      });

      const { success, message, data } = await UpdateRestaurante(updInformacion);
      if (success) {
        Swal.fire('Datos Actualizados');
      } else {
        console.log(message);
      }
    }
  };

  return (
    <>
      <div className="row col-12 mt-4">
        <h2 className="col-12 text-center">Informacion del Restaurante</h2>
      </div>
      <div style={{ minHeight: '368px' }} className="col-12 d-flex justify-content-center my-4">
        <div className="col-10">
          <div className="row">
            <div className="col-md-6">
              <InputText
                label="Nombre"
                id="Nombre"
                onChangeText={onChangeHandler}
                name="Nombre"
                value={updInformacion.Nombre}
                active
              />
            </div>
            <div className="col-6">
              <InputSelect
                label="Categoria"
                onChangeText={onChangeHandler}
                name="Categoria"
                id="Categoria"
                obj={updInformacion.Categoria}
                dataOptions={categorias}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <InputText
                label="Ubicacion"
                id="Ubicacion"
                onChangeText={onChangeHandler}
                name="Ubicacion"
                value={updInformacion.Ubicacion}
                active
              />
            </div>
            <div className="col-6">
              <InputSelect
                label="Pais"
                onChangeText={onChangeHandler}
                name="Pais"
                id="Pais"
                obj={updInformacion.Pais}
                dataOptions={paises}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <InputSelect
                label="Estado"
                onChangeText={onChangeHandler}
                name="Estado"
                id="Estado"
                obj={updInformacion.Estado}
                dataOptions={estados}
              />
            </div>
            <div className="col-6">
              <InputSelect
                label="Ciudad"
                onChangeText={onChangeHandler}
                name="Ciudad"
                id="Ciudad"
                obj={updInformacion.Ciudad}
                dataOptions={ciudades}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <InputText
                label="Horario de Apertura"
                id="HorarioApertura"
                onChangeText={onChangeHorarios}
                name="HorarioApertura"
                value={updInformacion.HorarioApertura.toString()}
                active
              />
            </div>
            <div className="col-md-6">
              <InputText
                label="Horario de Cierre"
                id="HorarioCierre"
                onChangeText={onChangeHorarios}
                name="HorarioCierre"
                value={updInformacion.HorarioCierre.toString()}
                active
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <InputText
                label="Precio de Reservación"
                id="PrecioReservacion"
                onChangeText={onChangeHandler}
                name="PrecioReservacion"
                value={updInformacion.PrecioReservacion.toString()}
                active
              />
            </div>
            <div className="col-md-6">
              <InputText
                label="Lugares Totales"
                id="LugaresTotales"
                onChangeText={onChangeHandler}
                name="LugaresTotales"
                value={updInformacion.LugaresTotales.toString()}
                active
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
              <button onClick={onSubmitForm} type="button" className="btn btn-default pull-right">
                Actualizar Informacion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
