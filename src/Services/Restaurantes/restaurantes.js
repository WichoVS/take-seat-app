/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;

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

// const GetTop3Restaurantes = async () => {};

export { RegistrarRestaurante, UpdateRestaurante, GetAllRestaurantes, GetRestauranteById };
