import React from 'react';

const InputField = ({ label, type, value, onChange, placeholder, required = true }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        className="custom-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;
