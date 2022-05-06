/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  CreatePais,
  GetAllPaises,
  TogglePaisStatus,
  UpdatePais,
} from '../../Services/Paises/paises';
import InputSearch from '../InputSearch';
import ModalPais from '../Modals/ModalPais';

export default function PaisesComponent() {
  const [searchFilter, setSearchFilter] = useState('');
  const [paises, setPaises] = useState([]);
  const [pais, setPais] = useState({
    _id: '',
    Nombre: '',
    FechaCreacion: null,
    UsuarioCreo: null,
    FechaModificacion: null,
    UsuarioModifico: null,
    Activo: true,
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeFilterHandler = ({ target }) => {
    setSearchFilter(target.value);
  };

  const onHandleActive = async (e) => {
    e.preventDefault();
    await TogglePaisStatus(e.target.id);
    const { success, data: resp } = await GetAllPaises();
    if (success) {
      setPaises(resp);
    }
  };

  const onClickAdd = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setPais({
      _id: '',
      Nombre: '',
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    });
    setShow(true);
  };

  const onHandleEdit = ({ target }) => {
    setPais({ ...pais, [target.name]: target.value });
  };

  const onClickEdit = ({ target }) => {
    const { id } = target;
    const { nombre } = target.dataset;
    const user = JSON.parse(localStorage.getItem('user'));
    setPais({
      ...pais,
      _id: id,
      Nombre: nombre,
      UsuarioModifico: user,
    });
    setShow(true);
  };

  const onSearchHandler = () => {
    console.log(searchFilter);
  };

  useEffect(async () => {
    const { success, data } = await GetAllPaises();
    if (success) {
      setPaises(data);
    }
  }, []);

  const onSaveCategoria = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setPais({
      ...pais,
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: user,
    });
    if (pais._id !== '') {
      const { success } = await UpdatePais(pais);
      if (success) {
        const { success: _success, data: resp } = await GetAllPaises();
        if (_success) {
          setPaises(resp);
        }
      }
    } else {
      const { success } = await CreatePais(pais);
      if (success) {
        const { success: _success, data: resp } = await GetAllPaises();
        if (_success) {
          setPaises(resp);
        }
      }
    }

    handleClose();
  };

  return (
    <div style={{ minHeight: '368px' }} className="d-flex col-12 flex-column">
      <div className="d-flex justify-content-center">
        <div className="col-10 d-flex justify-content-between">
          <div className="d-flex flex-row col-3 align-items-center my-4">
            <InputSearch
              label="Buscar"
              onChangeText={onChangeFilterHandler}
              onSearch={onSearchHandler}
              name="searchFilter"
              id="searchFilter"
              value={searchFilter}
            />
          </div>

          <div className="d-flex flex-row col-3 align-items-center justify-content-end my-4">
            <button
              onClick={onClickAdd}
              type="button"
              className="btn btn-default"
              style={{
                height: '34px',
                padding: '6px 12px',
              }}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex col-12 justify-content-center">
        <div className="col-10">
          <table className="table table-success col-12">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Estatus</th>
                <th>Activo</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {paises.map((p) => (
                <tr key={p._id}>
                  <td>{p._id}</td>
                  <td>{p.Nombre}</td>
                  <td className={p.Activo ? 'text-success' : 'text-danger'}>
                    {p.Activo ? 'Activo' : 'Inactivo'}
                  </td>
                  <td>
                    <button
                      onClick={onHandleActive}
                      id={p._id}
                      type="button"
                      className="material-icons"
                    >
                      visibility
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={onClickEdit}
                      id={p._id}
                      type="button"
                      data-nombre={p.Nombre}
                      className="material-icons"
                    >
                      edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ModalPais
        id="ModalPais"
        pais={pais}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        onChangeText={onHandleEdit}
        onSave={onSaveCategoria}
      />
    </div>
  );
}
