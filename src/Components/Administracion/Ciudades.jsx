/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  CreateCiudad,
  // eslint-disable-next-line no-unused-vars
  GetActivesCiudades,
  GetAllCiudades,
  ToggleStatusCiudad,
  UpdateCiudad,
} from '../../Services/Ciudades/ciudades';
import { GetActiveEstados } from '../../Services/Estados/estados';
import InputSearch from '../InputSearch';
import ModalCiudad from '../Modals/ModalCiudad';

export default function EstadosComponent() {
  const [searchFilter, setSearchFilter] = useState('');
  const [ciudades, setCiudades] = useState([]);
  const [estados, setEstados] = useState([]);
  const [ciudad, setCiudad] = useState({
    _id: '',
    Nombre: '',
    Estado: '',
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
    await ToggleStatusCiudad(e.target.id);
    const { success, data: resp } = await GetAllCiudades();
    if (success) {
      setCiudades(resp);
    }
  };

  const onClickAdd = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCiudad({
      _id: '',
      Nombre: '',
      Estado: '',
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    });
    setShow(true);
  };

  const onHandleEdit = ({ target }) => {
    setCiudad({ ...ciudad, [target.name]: target.value });
  };

  const onClickEdit = ({ target }) => {
    const { id } = target;
    const { nombre, estado } = target.dataset;
    const user = JSON.parse(localStorage.getItem('user'));
    setCiudad({
      ...ciudad,
      _id: id,
      Nombre: nombre,
      Estado: estado,
      UsuarioModifico: user,
    });

    setShow(true);
  };

  const onSearchHandler = () => {
    console.log(searchFilter);
  };

  useEffect(async () => {
    const { success: successE, data: dataE } = await GetActiveEstados();
    const { success, data } = await GetAllCiudades();

    if (successE) {
      setEstados(dataE);
    }
    if (success) {
      setCiudades(data);
    }
  }, []);

  const onSaveCategoria = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCiudad({
      ...ciudad,
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: user,
    });
    if (ciudad._id !== '') {
      const { success } = await UpdateCiudad(ciudad);
      if (success) {
        const { success: _success, data: resp } = await GetAllCiudades();
        if (_success) {
          setCiudades(resp);
        }
      }
    } else {
      const { success } = await CreateCiudad(ciudad);
      if (success) {
        const { success: _success, data: resp } = await GetAllCiudades();
        if (_success) {
          setCiudades(resp);
        }
      }
    }

    handleClose();
  };

  const IdEstadoToText = (id) => {
    let pais = '';
    estados.forEach((e) => {
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
                <th>Estado</th>
                <th>Estatus</th>
                <th>Activo</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {ciudades.map((p) => (
                <tr key={p._id}>
                  <td>{p._id}</td>
                  <td>{p.Nombre}</td>
                  <td>{IdEstadoToText(p.Estado)}</td>
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
                      data-estado={p.Estado}
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

      <ModalCiudad
        id="ModalEstado"
        ciudad={ciudad}
        show={show}
        estados={estados}
        handleClose={handleClose}
        handleShow={handleShow}
        onChangeText={onHandleEdit}
        onSave={onSaveCategoria}
      />
    </div>
  );
}
