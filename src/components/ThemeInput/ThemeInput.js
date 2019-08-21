import React from 'react';
import './ThemeInput.css';

const ThemeInput = ({ name, type, isValid, onChange, errorMsg, placeholder }) => {
  const error = !isValid ? 'error' : '';
  return (
    <div className="theme-input">
      <div className={`input-container ${error}`}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange({ value: e.target.value, name: e.target.name })}
        />
      </div>
      {!isValid ? <p className="error">{errorMsg}</p> : null}
    </div>
  );
};

export default ThemeInput;
