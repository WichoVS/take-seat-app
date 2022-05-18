/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;
const headers = {
  Authorization: `Bearer ${tkn}`,
};

const GetAllCiudades = async () => {
  const { data: resp } = await axios.get(`${urlBase}/ciudad/getAllCiudades`, { headers });

  return resp;
};

const GetActivesCiudades = async () => {
  const { data: resp } = await axios.get(`${urlBase}/ciudad/getActivesCiudades`, { headers });

  return resp;
};

const GetCiudadById = async (ciudadId) => {
  const { data: resp } = await axios.get(`${urlBase}/ciudad/getCiudadById/${ciudadId}`, {
    headers,
  });

  return resp;
};

const UpdateCiudad = async (ciudad) => {
  const { data: resp } = await axios.patch(`${urlBase}/ciudad/updateCiudad/${ciudad._id}`, ciudad, {
    headers,
  });

  return resp;
};

const ToggleStatusCiudad = async (ciudadId) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/ciudad/toggleStatus/${ciudadId}`,
    {},
    { headers },
  );

  return resp;
};

const CreateCiudad = async (ciudad) => {
  const { data: resp } = await axios.put(`${urlBase}/ciudad/createCiudad`, ciudad, { headers });

  return resp;
};

export {
  GetAllCiudades,
  GetActivesCiudades,
  CreateCiudad,
  GetCiudadById,
  UpdateCiudad,
  ToggleStatusCiudad,
};
