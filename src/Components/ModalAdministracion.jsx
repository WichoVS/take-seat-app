/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap';
import InputText from './InputText';

export default function ModalAdministracion({
  id,
  categoria,
  show,
  handleClose,
  handleShow,
  onChangeText,
  onSave,
}) {
  return (
    <Modal show={show} onHide={handleClose} id={id} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Nueva Categoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div
            style={categoria._id === '' ? { display: 'none' } : { display: 'block' }}
            className="col-10"
          >
            <InputText
              id="_id"
              label="ID"
              onChangeText={onChangeText}
              name="_id"
              value={categoria._id}
              active={false}
            />
          </div>
          <div className="col-10">
            <InputText
              id="Nombre"
              label="Nombre"
              onChangeText={onChangeText}
              name="Nombre"
              value={categoria.Nombre}
            />
          </div>
          <div className="col-10">
            <InputText
              id="Descripcion"
              label="Descripcion"
              onChangeText={onChangeText}
              name="Descripcion"
              value={categoria.Descripcion}
            />
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

ModalAdministracion.propTypes = {
  id: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  categoria: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Nombre: PropTypes.string,
    Descripcion: PropTypes.string,
  }).isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
