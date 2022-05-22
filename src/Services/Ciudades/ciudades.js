/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'https://takeseatapi.onrender.com/api/v1';
// eslint-disable-next-line max-len
const tkn = JSON.parse(localStorage.getItem('tkn'));
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
