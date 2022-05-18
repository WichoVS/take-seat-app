/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;
const headers = {
  Authorization: `Bearer ${tkn}`,
};

const GetAllEstados = async () => {
  const { data: resp } = await axios.get(`${urlBase}/estado/getAllEstados`, { headers });

  return resp;
};

const GetEstadoById = async (estadoId) => {
  const { data: resp } = await axios.get(`${urlBase}/estado/getEstadoById/${estadoId}`, {
    headers,
  });

  return resp;
};

const ToggleEstadoStatus = async (estadoId) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/estado/toggleStatus/${estadoId}`,
    {},
    { headers },
  );

  return resp;
};

const UpdateEstado = async (estado) => {
  const { data: resp } = await axios.patch(`${urlBase}/estado/updateEstado/${estado._id}`, estado, {
    headers,
  });

  return resp;
};

const CreateEstado = async (estado) => {
  const { data: resp } = await axios.put(`${urlBase}/estado/createEstado`, estado, { headers });
  return resp;
};

const GetActiveEstados = async () => {
  const { data: resp } = await axios.get(`${urlBase}/estado/getActives`, { headers });

  return resp;
};

export {
  GetAllEstados,
  GetEstadoById,
  ToggleEstadoStatus,
  UpdateEstado,
  CreateEstado,
  GetActiveEstados,
};
