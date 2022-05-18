/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

export default function InputSelect({
  label,
  onChangeText,
  name,
  id,
  obj,
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
        value={obj || ''}
      >
        <option value=""> .::Selecciona una opcion::.</option>
        {dataOptions.map((e) => (
          <option key={e._id} value={e._id}>
            {e.Nombre}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  obj: PropTypes.string,
  dataOptions: PropTypes.arrayOf(PropTypes.shape({ _id: PropTypes.string.isRequired })),
  error: PropTypes.string,
};

InputSelect.defaultProps = {
  obj: '',
  dataOptions: [],
  error: '',
};
