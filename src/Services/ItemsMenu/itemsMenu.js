/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const urlBase = 'https://takeseatapi.onrender.com/api/v1';
// eslint-disable-next-line max-len
const tkn = JSON.parse(localStorage.getItem('tkn'));

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
