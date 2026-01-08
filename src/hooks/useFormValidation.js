import { useState, useCallback } from 'react';

/**
 * Custom hook for form validation
 * @param {Object} initialValues - Initial form values
 * @param {Object} validationRules - Object mapping field names to validator functions
 * @returns {Object} Form state and handlers
 */
export function useFormValidation(initialValues, validationRules = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = useCallback((name, value) => {
    const validator = validationRules[name];
    if (!validator) return '';
    return validator(value);
  }, [validationRules]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Validate on change if field was already touched (skip checkbox)
    if (touched[name] && type !== 'checkbox') {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, newValue)
      }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  }, [validateField]);

  const validateAll = useCallback((fieldsToValidate = null) => {
    const fieldsToCheck = fieldsToValidate || Object.keys(validationRules);
    const newErrors = {};
    let isValid = true;

    fieldsToCheck.forEach(field => {
      const error = validateField(field, values[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);

    // Mark all fields as touched
    const allTouched = {};
    fieldsToCheck.forEach(f => allTouched[f] = true);
    setTouched(allTouched);

    return isValid;
  }, [values, validateField, validationRules]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  const getFieldProps = useCallback((name) => ({
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur
  }), [values, handleChange, handleBlur]);

  const getFieldState = useCallback((name) => ({
    error: errors[name] || '',
    touched: touched[name] || false,
    hasError: touched[name] && !!errors[name]
  }), [errors, touched]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    validateField,
    reset,
    setFieldValue,
    setFieldError,
    setValues,
    getFieldProps,
    getFieldState
  };
}

export default useFormValidation;
