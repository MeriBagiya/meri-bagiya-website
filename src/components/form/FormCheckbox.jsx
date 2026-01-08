import React from 'react';

function FormCheckbox({
  name,
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
  icon,
  ...props
}) {
  return (
    <div className={`form-check ${className}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className="form-check-input"
        disabled={disabled}
        style={{ marginTop: '4px', width: '18px', height: '18px', cursor: 'pointer' }}
        {...props}
      />
      <label
        htmlFor={name}
        className="form-check-label"
        style={{ cursor: 'pointer', fontSize: '14px', color: '#666' }}
      >
        {icon && <i className={icon} style={{ marginRight: '6px' }}></i>}
        {label}
      </label>
    </div>
  );
}

export default FormCheckbox;
