import React from 'react';

function FormSelect({
  name,
  value,
  onChange,
  onBlur,
  label,
  error,
  touched,
  disabled = false,
  className = '',
  size = 'default',
  options = [],
  placeholder = 'Select an option',
  required = false,
  ...props
}) {
  const hasError = touched && error;
  const sizeClass = size === 'lg' ? 'form-select-lg' : '';

  return (
    <div className="field-set">
      {label && (
        <label className="form-label fw-500">
          {label} {required && '*'}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-select ${sizeClass} ${hasError ? 'is-invalid' : ''} ${className}`}
        disabled={disabled}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError && (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default FormSelect;
