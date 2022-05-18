/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;

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
