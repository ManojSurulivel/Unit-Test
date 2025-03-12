import React from 'react';
import { useDispatch } from 'react-redux';
import { setField } from '../redux/formSlice';

function FormInput({ label, name, type = 'text', value, error }) {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(setField({ field: name, value: e.target.value }));
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-control"
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
}

export default FormInput;
