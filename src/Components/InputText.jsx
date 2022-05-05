import React from 'react';
import PropTypes from 'prop-types';

export default function InputText({ label, onChangeText, name, id, error = {} }) {
  return (
    <div className="form-group">
      <label htmlFor="props.id">{label}</label>
      <input onChange={onChangeText} name={name} className="form-control" id={id} type="text" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

InputText.defaultProps = {
  error: '',
};
