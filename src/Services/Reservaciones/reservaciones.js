/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;
const headers = {
  Authorization: `Bearer ${tkn}`,
};

const CreateReservacion = async (reservacion) => {
  const { data: resp } = await axios.put(`${urlBase}/reservacion/createReservacion`, reservacion, {
    headers,
  });

  return resp;
};

const GetAllReservaciones = async () => {
  const { data: resp } = await axios.get(`${urlBase}/reservacion/getAllReservaciones`, { headers });

  return resp;
};

const GetReservacionesByRestaurante = async (idRestaurante) => {
  const { data: resp } = await axios.get(
    `${urlBase}/reservacion/getAllReservacionesByRestaurante/${idRestaurante}`,
    {
      headers,
    },
  );
  return resp;
};

const GetReservacionesByUser = async (idUser) => {
  const { data: resp } = await axios.get(
    `${urlBase}/reservacion/getAllReservacionesByUser/${idUser}`,
    {
      headers,
    },
  );

  return resp;
};

const GetReservacionById = async (idReservacion) => {
  const { data: resp } = await axios.get(
    `${urlBase}/reservacion/getReservacionById/${idReservacion}`,
    {
      headers,
    },
  );

  return resp;
};

const UpdateReservacion = async (reservacion) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/reservacion/updateReservacion/${reservacion._id}`,
    reservacion,
    { headers },
  );

  return resp;
};

const CancelarReservacion = async (idReservacion) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/reservacion/cancelarReservacion/${idReservacion}`,
    {},
    { headers },
  );
  return resp;
};

const PagarReservacion = async (idReservacion) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/reservacion/pagarReservacion/${idReservacion}`,
    {},
    { headers },
  );
  return resp;
};

const GetMisReservaciones = async (idUser) => {
  const { data: resp } = await axios.get(`${urlBase}/reservacion/getMisReservaciones/${idUser}`, {
    headers,
  });

  return resp;
};

export {
  CreateReservacion,
  GetAllReservaciones,
  GetReservacionesByRestaurante,
  GetReservacionesByUser,
  GetReservacionById,
  UpdateReservacion,
  CancelarReservacion,
  PagarReservacion,
  GetMisReservaciones,
};
