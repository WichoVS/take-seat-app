/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

export default function InputSelect({
  label,
  onChangeText,
  name,
  id,
  restaurante,
  error = {},
  dataOptions = [],
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="form-control"
        onChange={onChangeText}
        name={name}
        id={id}
        value={restaurante._id || ''}
      >
        <option value=""> .::Selecciona una opcion::.</option>
        {dataOptions.forEach((e) => {
          <option value={e._id}> e.Nombre</option>;
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  restaurante: PropTypes.shape({ root: PropTypes.string.isRequired }),
  dataOptions: PropTypes.arrayOf(PropTypes.shape({ root: PropTypes.string.isRequired })),
  error: PropTypes.string,
};

InputSelect.defaultProps = {
  restaurante: {},
  dataOptions: [],
  error: '',
};
