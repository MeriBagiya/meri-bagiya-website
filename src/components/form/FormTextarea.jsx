import React from 'react';

function FormTextarea({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  label,
  error,
  touched,
  disabled = false,
  className = '',
  size = 'default',
  rows = 5,
  required = false,
  ...props
}) {
  const hasError = touched && error;
  const sizeClass = size === 'lg' ? 'form-control-lg' : '';

  return (
    <div className="field-set">
      {label && (
        <label className="form-label fw-500">
          {label} {required && '*'}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-control ${sizeClass} ${hasError ? 'is-invalid' : ''} ${className}`}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        {...props}
      />
      {hasError && (
        <div className="invalid-feedback" style={{ display: 'block' }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default FormTextarea;
