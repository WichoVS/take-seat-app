/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'https://takeseatapi.onrender.com/api/v1';
// eslint-disable-next-line max-len
const tkn = JSON.parse(localStorage.getItem('tkn'));

const headers = {
  Authorization: `Bearer ${tkn}`,
};

const GetDescripcionRestaurante = async (idRestaurante) => {
  const { data: resp } = await axios.get(`${urlBase}/descripcion/getDescripcion/${idRestaurante}`, {
    headers,
  });

  return resp;
};

const CreateDescripcionRestaurante = async (descripcion) => {
  const { data: resp } = await axios.put(`${urlBase}/descripcion/createDescripcion`, descripcion, {
    headers,
  });

  return resp;
};

const UpdateDescripcionRestaurante = async (descripcion) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/descripcion/updateDescripcion/${descripcion.Restaurante}`,
    descripcion,
    { headers },
  );

  return resp;
};

export { GetDescripcionRestaurante, CreateDescripcionRestaurante, UpdateDescripcionRestaurante };
