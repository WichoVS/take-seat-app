/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;
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

export { GetAllPaises, GetPaisById, UpdatePais, CreatePais, TogglePaisStatus };
