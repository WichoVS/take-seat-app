/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000';

const IniciarSesion = async (usuario, password) => {
  const { data: resp } = await axios.post(`${urlBase}/iniciarSesion`, {
    Usuario: usuario,
    Password: password,
  });

  localStorage.setItem('user', JSON.stringify(resp.data._id));
  localStorage.setItem('tkn', JSON.stringify(resp.data.token));

  return true;
};

const Registro = async () => {};

const GetUsuario = async () => {};

export { IniciarSesion, Registro, GetUsuario };
