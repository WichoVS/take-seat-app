/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import InputText from '../InputText';
import InputSelect from '../InputSelect';

export default function ModalItemMenu({
  id,
  ItemMenu,
  show,
  handleClose,
  handleShow,
  onChangeText,
  onSave,
  onImageHandler,
  onCheckBox,
  onCostoEdit,
}) {
  return (
    <Modal size="xl" show={show} onHide={handleClose} id={id} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Nuevo Item del Menú</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center flex-column col-12">
          <div className="col-10 row">
            <div className="col-9">
              <InputText
                label="Nombre"
                onChangeText={onChangeText}
                name="Nombre"
                id="Nombre"
                value={ItemMenu.Nombre}
                active
              />
            </div>
            <div className="col-3">
              <InputText
                label="Costo"
                onChangeText={onCostoEdit}
                name="Costo"
                id="Costo"
                value={ItemMenu.Costo.toString()}
                active
              />
            </div>
          </div>
          <div className="col-10 row">
            <div className="col-12">
              <InputText
                label="Descripcion"
                onChangeText={onChangeText}
                name="Descripcion"
                id="Descripcion"
                value={ItemMenu.Descripcion}
                active
              />
            </div>
          </div>
          <div className="col-10 row">
            <div className="form-group">
              <span>Fotografía</span>
              <input
                onChange={onImageHandler}
                name="Imagen"
                type="file"
                className="form-control"
                id="user-thumb-reg"
              />
              <div className="thumb-holder" />
            </div>
          </div>
          <div className="col-10 d-flex row">
            <div className="col-6 form-group">
              <span>Platillo Especial</span>
              <div className="checkbox">
                <input
                  type="checkbox"
                  value={ItemMenu.Especial}
                  onChange={onCheckBox}
                  checked={ItemMenu.Especial}
                  name="Especial"
                  id="Especial"
                />
              </div>
            </div>
            <div className="col-6">
              <InputSelect
                label="Tipo Item:"
                onChangeText={onChangeText}
                name="Tipo"
                id="Tipo"
                obj={ItemMenu.Tipo}
                dataOptions={[
                  { _id: 'COMIDA', Nombre: 'Comida' },
                  { _id: 'BEBIDA', Nombre: 'Bebida' },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button
          className="btn btn-secondary"
          type="button"
          variant="secondary"
          onClick={handleClose}
        >
          Cerrar
        </button>
        <button onClick={onSave} className="btn btn-primary" type="button" variant="primary">
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

ModalItemMenu.propTypes = {
  id: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  ItemMenu: PropTypes.shape({
    _id: PropTypes.string,
    Nombre: PropTypes.string,
    Descripcion: PropTypes.string,
    Imagen: PropTypes.string,
    Costo: PropTypes.number,
    Restaurante: PropTypes.string,
    FechaCreacion: PropTypes.string,
    FechaModificacion: PropTypes.string,
    Activo: PropTypes.bool,
    Especial: PropTypes.bool,
    Tipo: PropTypes.string,
  }).isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onImageHandler: PropTypes.func.isRequired,
  onCheckBox: PropTypes.func.isRequired,
};
