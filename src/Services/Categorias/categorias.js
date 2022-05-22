/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'https://takeseatapi.onrender.com/api/v1';
// eslint-disable-next-line max-len
const tkn = JSON.parse(localStorage.getItem('tkn'));

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
