/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'https://takeseatapi.onrender.com/api/v1';
// eslint-disable-next-line max-len
const tkn = JSON.parse(localStorage.getItem('tkn'));

const headers = {
  Authorization: `Bearer ${tkn}`,
};

const RegistrarRestaurante = async (restaurante) => {
  const { data: resp } = await axios.put(`${urlBase}/restaurante/createRestaurante`, restaurante, {
    headers,
  });

  return resp;
};

const UpdateRestaurante = async (restaurante) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/restaurante/updateRestaurante/${restaurante._id}`,
    restaurante,
    { headers },
  );

  return resp;
};

const GetAllRestaurantes = async () => {
  const { data: resp } = await axios.get(`${urlBase}/restaurante/getAllRestaurantes`, { headers });

  return resp;
};

const GetRestauranteById = async (idRestaurante) => {
  const { data: resp } = await axios.get(
    `${urlBase}/restaurante/getRestauranteById/${idRestaurante}`,
    {
      headers,
    },
  );

  return resp;
};

const GetInfoReservacionesRestaurante = async (info) => {
  const { data: resp } = await axios.post(`${urlBase}/restaurante/infoReservacion`, info, {
    headers,
  });

  return resp;
};

const GetRestaurantesByFilter = async (busqueda) => {
  const { data: resp } = await axios.post(
    `${urlBase}/restaurante/getRestaurantesByFilters`,
    busqueda,
    { headers },
  );

  return resp;
};

// const GetTop3Restaurantes = async () => {};

export {
  RegistrarRestaurante,
  UpdateRestaurante,
  GetAllRestaurantes,
  GetRestauranteById,
  GetInfoReservacionesRestaurante,
  GetRestaurantesByFilter,
};
