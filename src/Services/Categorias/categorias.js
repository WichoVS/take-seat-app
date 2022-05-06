/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;

const GetAllCategorias = async () => {
  const { data: resp } = await axios.get(`${urlBase}/categoria/getAllCategorias`, {
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
  });

  return resp;
};

const GetCategoriaById = async (idCategoria) => {
  const { data: resp } = await axios.get(`${urlBase}/categoria/getCategoriaById/${idCategoria}`, {
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
  });

  return resp;
};

const CreateCategoria = async (categoriaNew) => {
  const headers = {
    Authorization: `Bearer ${tkn}`,
  };
  const { data: resp } = await axios.put(`${urlBase}/categoria/createCategoria`, categoriaNew, {
    headers,
  });

  return resp;
};

const ToggleStatusCategoria = async (categoriaId) => {
  const headers = {
    Authorization: `Bearer ${tkn}`,
  };
  const data = {};
  const { data: resp } = await axios.put(`${urlBase}/categoria/toggleStatus/${categoriaId}`, data, {
    headers,
  });

  return resp;
};

const UpdateCategoria = async (categoriaUpd) => {
  const headers = {
    Authorization: `Bearer ${tkn}`,
  };
  const { data: resp } = await axios.patch(
    `${urlBase}/categoria/updateCategoria/${categoriaUpd._id}`,
    categoriaUpd,
    { headers },
  );

  return resp;
};

export {
  GetAllCategorias,
  GetCategoriaById,
  CreateCategoria,
  UpdateCategoria,
  ToggleStatusCategoria,
};
