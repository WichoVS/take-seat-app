/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;
const headers = {
  Authorization: `Bearer ${tkn}`,
};

const CrearComentario = async (comentario) => {
  const { data: resp } = await axios.put(`${urlBase}/review/createReview`, comentario, { headers });
  return resp;
};

const GetComentariosByRestaurante = async (idRestaurante) => {
  const { data: resp } = await axios.get(
    `${urlBase}/review/getReviewByRestaurante/${idRestaurante}`,
    { headers },
  );

  return resp;
};

const CanComentar = async (idUser, idRestaurante) => {
  const { data: resp } = await axios.get(`${urlBase}/review/canReview/${idUser}/${idRestaurante}`, {
    headers,
  });

  return resp;
};

export { CrearComentario, GetComentariosByRestaurante, CanComentar };
