/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'https://takeseatapi.onrender.com/api/v1';
// eslint-disable-next-line max-len
const tkn = JSON.parse(localStorage.getItem('tkn'));
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
