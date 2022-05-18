/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  CreateEstado,
  GetAllEstados,
  ToggleEstadoStatus,
  UpdateEstado,
} from '../../Services/Estados/estados';
import { GetActivePaises } from '../../Services/Paises/paises';
import InputSearch from '../InputSearch';
import ModalEstado from '../Modals/ModalEstado';

export default function EstadosComponent() {
  const [searchFilter, setSearchFilter] = useState('');
  const [estados, setEstados] = useState([]);
  const [paises, setPaises] = useState([]);
  const [estado, setEstado] = useState({
    _id: '',
    Nombre: '',
    Pais: '',
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
    await ToggleEstadoStatus(e.target.id);
    const { success, data: resp } = await GetAllEstados();
    if (success) {
      setEstados(resp);
    }
  };

  const onClickAdd = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setEstado({
      _id: '',
      Nombre: '',
      Pais: '',
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    });
    setShow(true);
  };

  const onHandleEdit = ({ target }) => {
    setEstado({ ...estado, [target.name]: target.value });
  };

  const onClickEdit = ({ target }) => {
    const { id } = target;
    const { nombre, pais } = target.dataset;
    const user = JSON.parse(localStorage.getItem('user'));
    setEstado({
      ...estado,
      _id: id,
      Nombre: nombre,
      Pais: pais,
      UsuarioModifico: user,
    });

    setShow(true);
  };

  const onSearchHandler = () => {
    console.log(searchFilter);
  };

  useEffect(async () => {
    const { success: successP, data: dataP } = await GetActivePaises();
    const { success, data } = await GetAllEstados();

    if (successP) {
      setPaises(dataP);
    }
    if (success) {
      setEstados(data);
    }
  }, []);

  const onSaveCategoria = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setEstado({
      ...estado,
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: user,
    });
    if (estado._id !== '') {
      const { success } = await UpdateEstado(estado);
      if (success) {
        const { success: _success, data: resp } = await GetAllEstados();
        if (_success) {
          setEstados(resp);
        }
      }
    } else {
      const { success } = await CreateEstado(estado);
      if (success) {
        const { success: _success, data: resp } = await GetAllEstados();
        if (_success) {
          setEstados(resp);
        }
      }
    }

    handleClose();
  };

  const IdPaisToText = (id) => {
    let pais = '';
    paises.forEach((e) => {
      if (e._id === id) pais = e.Nombre;
    });

    return pais;
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
                <th>Pais</th>
                <th>Estatus</th>
                <th>Activo</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {estados.map((p) => (
                <tr key={p._id}>
                  <td>{p._id}</td>
                  <td>{p.Nombre}</td>
                  <td>{IdPaisToText(p.Pais)}</td>
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
                      data-pais={p.Pais}
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

      <ModalEstado
        id="ModalEstado"
        estado={estado}
        show={show}
        paises={paises}
        handleClose={handleClose}
        handleShow={handleShow}
        onChangeText={onHandleEdit}
        onSave={onSaveCategoria}
      />
    </div>
  );
}
