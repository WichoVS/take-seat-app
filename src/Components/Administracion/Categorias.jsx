/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import InputSearch from '../InputSearch';
import {
  CreateCategoria,
  GetAllCategorias,
  ToggleStatusCategoria,
  UpdateCategoria,
} from '../../Services/Categorias/categorias';
import ModalAdministracion from '../ModalAdministracion';

export default function CategoriasComponent() {
  const [searchFilter, setSearchFilter] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState({
    _id: '',
    Nombre: '',
    Descripcion: '',
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
    await ToggleStatusCategoria(e.target.id);
    const { success, data: resp } = await GetAllCategorias();
    if (success) {
      setCategorias(resp);
    }
  };

  const onClickAdd = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCategoria({
      _id: '',
      Nombre: '',
      Descripcion: '',
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    });
    setShow(true);
  };

  const onHandleEdit = ({ target }) => {
    setCategoria({ ...categoria, [target.name]: target.value });
  };

  const onClickEdit = ({ target }) => {
    const { id } = target;
    const { nombre, descripcion } = target.dataset;
    const user = JSON.parse(localStorage.getItem('user'));
    setCategoria({
      ...categoria,
      _id: id,
      Nombre: nombre,
      Descripcion: descripcion,
      UsuarioModifico: user,
    });
    setShow(true);
  };

  const onSearchHandler = () => {
    console.log(searchFilter);
  };

  useEffect(async () => {
    const { success, data } = await GetAllCategorias();
    if (success) {
      setCategorias(data);
    }
  }, []);

  const onSaveCategoria = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setCategoria({
      ...categoria,
      FechaCreacion: null,
      UsuarioCreo: user,
      FechaModificacion: null,
      UsuarioModifico: user,
    });
    if (categoria._id !== '') {
      const { success } = await UpdateCategoria(categoria);
      if (success) {
        const { success: _success, data: resp } = await GetAllCategorias();
        if (_success) {
          setCategorias(resp);
        }
      }
    } else {
      const { success } = await CreateCategoria(categoria);
      if (success) {
        const { success: _success, data: resp } = await GetAllCategorias();
        if (_success) {
          setCategorias(resp);
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
                <th>Descripción</th>
                <th>Estatus</th>
                <th>Activo</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {categorias.map((cat) => (
                <tr key={cat._id}>
                  <td>{cat._id}</td>
                  <td>{cat.Nombre}</td>
                  <td>{cat.Descripcion}</td>
                  <td className={cat.Activo ? 'text-success' : 'text-danger'}>
                    {cat.Activo ? 'Activo' : 'Inactivo'}
                  </td>
                  <td>
                    <button
                      onClick={onHandleActive}
                      id={cat._id}
                      type="button"
                      className="material-icons"
                    >
                      visibility
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={onClickEdit}
                      id={cat._id}
                      type="button"
                      data-nombre={cat.Nombre}
                      data-descripcion={cat.Descripcion}
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

      <ModalAdministracion
        id="ModalCategoria"
        categoria={categoria}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        onChangeText={onHandleEdit}
        onSave={onSaveCategoria}
      />
    </div>
  );
}
