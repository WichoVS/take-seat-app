import React from 'react';
import PropTypes from 'prop-types';

export default function InputSearch({ label, onChangeText, onSearch, name, id, error = {} }) {
  const btnHeight = {
    height: '34px',
    padding: '6px 12px',
  };

  return (
    <div className="form-group d-flex flex-row align-items-center">
      <label htmlFor="props.id">{label}</label>
      <input onChange={onChangeText} name={name} className="form-control" id={id} type="text" />
      {error && <div className="alert alert-danger">{error}</div>}
      <button onClick={onSearch} style={btnHeight} className="btn btn-default" type="button">
        Buscar
      </button>
    </div>
  );
}

InputSearch.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};

InputSearch.defaultProps = {
  error: '',
};
