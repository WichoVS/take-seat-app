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

const RegistroUsuario = async (nombre, correo, usuario, password) => {
  const { data: resp } = await axios.post(`${urlBase}/registrarUsuario`, {
    _id: null,
    Nombre: nombre,
    Usuario: usuario,
    Correo: correo,
    Imagen: 'https://cdn.fakercloud.com/avatars/ntfblog_128.jpg',
    Pais: null,
    Estado: null,
    Ciudad: null,
    Password: password,
    FechaCreacion: new Date(),
    FechaModificacion: null,
    Administrador: true,
  });

  localStorage.setItem('user', JSON.stringify(resp.data.user._id));
  localStorage.setItem('tkn', JSON.stringify(resp.data.token));

  return true;
};

const GetUsuario = async () => {
  const u = JSON.parse(localStorage.getItem('user'));
  const t = JSON.parse(localStorage.getItem('tkn'));

  const { data: resp } = await axios.get(`${urlBase}/api/v1/usuario/getUsuarioById/${u}`, {
    headers: {
      Authorization: `Bearer ${t}`,
    },
  });

  return resp;
};

const GetUsuarioRestaurante = async () => {
  const u = JSON.parse(localStorage.getItem('user'));
  const t = JSON.parse(localStorage.getItem('tkn'));

  const { data: resp } = await axios.get(`${urlBase}/api/v1/usuario/usuarioRestaurante/${u}`, {
    headers: {
      Authorization: `Bearer ${t}`,
    },
  });

  return resp;
};

export { IniciarSesion, RegistroUsuario, GetUsuario, GetUsuarioRestaurante };
