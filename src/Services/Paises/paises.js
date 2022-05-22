/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'https://takeseatapi.onrender.com/api/v1';
// eslint-disable-next-line max-len
const tkn = JSON.parse(localStorage.getItem('tkn'));
const headers = {
  Authorization: `Bearer ${tkn}`,
};

const GetAllPaises = async () => {
  const { data: resp } = await axios.get(`${urlBase}/pais/getAllPaises`, { headers });

  return resp;
};
const GetPaisById = async (paisId) => {
  const { data: resp } = await axios.get(`${urlBase}/pais/getPaisById/${paisId}`, { headers });

  return resp;
};
const UpdatePais = async (pais) => {
  const { data: resp } = await axios.patch(`${urlBase}/pais/updatePais/${pais._id}`, pais, {
    headers,
  });

  return resp;
};
const CreatePais = async (pais) => {
  const { data: resp } = await axios.put(`${urlBase}/pais/createPais`, pais, { headers });

  return resp;
};
const TogglePaisStatus = async (paisId) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/pais/toggleStatus/${paisId}`,
    {},
    { headers },
  );

  return resp;
};

const GetActivePaises = async () => {
  const { data: resp } = await axios.get(`${urlBase}/pais/getActivePaises`, { headers });

  return resp;
};

export { GetAllPaises, GetPaisById, UpdatePais, CreatePais, TogglePaisStatus, GetActivePaises };
