import React from 'react';
import PropTypes from 'prop-types';

export default function InputText({ label, onChangeText, name, id, value, active, error = {} }) {
  return (
    <div className="form-group">
      <label htmlFor="props.id">{label}</label>
      <input
        onChange={onChangeText}
        name={name}
        className="form-control"
        value={value}
        id={id}
        type="text"
        disabled={!active}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  active: PropTypes.bool,
};

InputText.defaultProps = {
  value: '',
  error: '',
  active: true,
};
