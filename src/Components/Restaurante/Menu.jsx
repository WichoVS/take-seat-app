/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CreateItemMenu,
  GetItemsMenuByRestaurante,
  ToggleItemMenuStatus,
} from '../../Services/ItemsMenu/itemsMenu';
import ModalItemMenu from '../Modals/ModalItemMenu';

export default function MenuComponent() {
  const { restaurante: restauranteId } = useParams();
  const [item, setItem] = useState({
    _id: '',
    Nombre: '',
    Descripcion: '',
    Imagen: '',
    Costo: 0,
    Restaurante: '',
    FechaCreacion: null,
    FechaModificacion: null,
    Activo: true,
    Especial: false,
    Tipo: '',
  });

  const [items, setItemsMenu] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onCheckboxHandle = (e) => {
    const val = e.target.checked;
    setItem({ ...item, Especial: !item.Especial });
  };

  const onEditHandle = ({ target }) => {
    setItem({ ...item, [target.name]: target.value });
  };

  const onNumberEditHandle = ({ target }) => {
    setItem({
      ...item,
      [target.name]: Number.isNaN(parseInt(target.value, 10)) ? 0 : parseInt(target.value, 10),
    });
  };

  const onSaveHandle = async () => {
    const { success, message, data } = await CreateItemMenu(item);
    if (success) {
      const {
        success: sList,
        message: mList,
        data: dList,
      } = await GetItemsMenuByRestaurante(restauranteId);

      handleClose();
      if (sList) {
        setItemsMenu(dList);
      } else {
        console.log(mList);
      }
    } else {
      console.log(message);
    }
  };

  const onImageHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setItem({
        ...item,
        Imagen: reader.result,
      });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  useEffect(async () => {
    const { success, message, data } = await GetItemsMenuByRestaurante(restauranteId);
    if (success) {
      setItemsMenu(data);
    } else {
      console.log(message);
    }
  }, []);

  const onClickAdd = () => {
    setItem({
      _id: '',
      Nombre: '',
      Descripcion: '',
      Imagen: '',
      Costo: 0,
      Restaurante: restauranteId,
      FechaCreacion: null,
      FechaModificacion: null,
      Activo: true,
      Especial: false,
      Tipo: '',
    });
    setShow(true);
  };

  const onClickEdit = (e) => {
    const { id, nombre, costo, descripcion, imagen, especial, tipo } = e.target.dataset;
    setItem({
      _id: id,
      Nombre: nombre,
      Descripcion: descripcion,
      Imagen: imagen,
      Costo: costo,
      Restaurante: restauranteId,
      FechaCreacion: null,
      FechaModificacion: null,
      Activo: true,
      Especial: especial === 'true',
      Tipo: tipo,
    });
    setShow(true);
  };

  const onToggleActivo = async (e) => {
    const id = e.target.id;
    const { success, message, data } = await ToggleItemMenuStatus(id);

    if (success) {
      const { success: s, message: m, data: d } = await GetItemsMenuByRestaurante(restauranteId);
      if (s) {
        setItemsMenu(d);
      } else {
        console.log(d);
      }
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <div className="row col-12 mt-4">
        <h2 className="col-12 text-center">Menú</h2>
      </div>
      <div style={{ minHeight: '368px' }} className="col-12 d-flex justify-content-center my-4">
        <div className="col-10">
          <div className="row">
            <button
              type="button"
              onClick={onClickAdd}
              className="col-2 btn btn-default pull-right mb-4"
            >
              Nuevo Platillo
            </button>
          </div>
          <div className="row">
            <table className="col-12 table table-bordered table-striped table-responsive-xl">
              <thead className="table-success">
                <tr>
                  <th className="col-2">Nombre</th>
                  <th className="col-5">Descripción</th>
                  <th className="col-2">Costo</th>
                  <th className="col-1">Especial</th>
                  <th className="col-1">Editar</th>
                  <th className="col-1">Desactivar</th>
                </tr>
              </thead>
              <tbody>
                {items.map((i) => (
                  <tr key={i._id}>
                    <td>{i.Nombre}</td>
                    <td>{i.Descripcion}</td>
                    <td>{`$ ${i.Costo}`}</td>
                    <td>{i.Especial ? 'Especial' : 'No Especial'}</td>
                    <td>
                      <button
                        onClick={onClickEdit}
                        type="button"
                        data-id={i._id}
                        data-nombre={i.Nombre}
                        data-costo={i.Costo}
                        data-descripcion={i.Descripcion}
                        data-imagen={i.Imagen}
                        data-especial={i.Especial}
                        data-tipo={i.Tipo}
                      >
                        Editar
                      </button>
                    </td>
                    <td>
                      <button type="button" onClick={onToggleActivo} id={i._id}>
                        {i.Activo ? 'Desactivar' : 'Activar'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ModalItemMenu
        id="ModalItemMenu"
        ItemMenu={item}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        onChangeText={onEditHandle}
        onSave={onSaveHandle}
        onCheckBox={onCheckboxHandle}
        onImageHandler={onImageHandler}
        onCostoEdit={onNumberEditHandle}
      />
    </>
  );
}
