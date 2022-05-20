import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  GetDescripcionRestaurante,
  UpdateDescripcionRestaurante,
} from '../../Services/Descripciones/descripcionesRestaurantes';
import InputText from '../InputText';

export default function DescripcionComponent() {
  const [descripcion, setDescripcion] = useState({});
  const { restaurante: restauranteId } = useParams();

  useEffect(async () => {
    const { success, message, data } = await GetDescripcionRestaurante(restauranteId);
    if (success) {
      setDescripcion(data);
    } else {
      console.log(message);
    }
  }, []);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    setDescripcion({
      ...descripcion,
      [name]: value,
    });
  };
  const onSubmitForm = async () => {
    const userLog = JSON.parse(localStorage.getItem('user'));
    if (typeof userLog === 'string') {
      setDescripcion({
        ...descripcion,
        UsuarioModifico: userLog,
      });

      const { success, message } = await UpdateDescripcionRestaurante(descripcion);
      if (success) {
        Swal.fire('Datos Actualizados');
      } else {
        console.log(message);
      }
    }
  };

  return (
    <div className="col-12 d-flex justify-content-center my-4">
      <div className="col-10">
        <div className="row">
          <div className="col-md-12 h-100">
            <InputText
              label="Descripcion"
              id="Descripcion"
              onChangeText={onChangeHandler}
              name="Descripcion"
              value={descripcion.Descripcion}
              active
            />
          </div>
          <div className="col-12">
            <InputText
              label="Slogan"
              id="Slogan"
              onChangeText={onChangeHandler}
              name="Slogan"
              value={descripcion.Slogan}
              active
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <button onClick={onSubmitForm} type="button" className="btn btn-default pull-right">
              Actualizar Descripción y Slogan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
