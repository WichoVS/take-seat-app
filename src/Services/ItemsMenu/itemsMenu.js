/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'http://localhost:5000/api/v1';
// eslint-disable-next-line max-len
const tkn = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGU0ZDhmMWUyOWMyZDY2NTljY2E2MiIsImlhdCI6MTY1MTg2MzA3MiwiZXhwIjoxNjYwNTAzMDcyfQ.HZBCFWSvK_5Z9jnx9J8TvODB7_WXzdPGqUCuUGcoeNw`;

const headers = {
  Authorization: `Bearer ${tkn}`,
};

const CreateItemMenu = async (itemMenu) => {
  const { data: resp } = await axios.put(`${urlBase}/item-menu/createItemMenu`, itemMenu, {
    headers,
  });

  return resp;
};

const UpdateItemMenu = async (itemMenu) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/item-menu/updateItemMenu/${itemMenu._id}`,
    itemMenu,
    { headers },
  );

  return resp;
};

const GetItemsMenuByRestaurante = async (restauranteId) => {
  const { data: resp } = await axios.get(
    `${urlBase}/item-menu/getItemsMenuByRestaurante/${restauranteId}`,
    { headers },
  );

  return resp;
};

const ToggleItemMenuStatus = async (itemId) => {
  const { data: resp } = await axios.patch(
    `${urlBase}/item-menu/toggleItemMenuStatus/${itemId}`,
    {},
    { headers },
  );

  return resp;
};

export { CreateItemMenu, UpdateItemMenu, GetItemsMenuByRestaurante, ToggleItemMenuStatus };
