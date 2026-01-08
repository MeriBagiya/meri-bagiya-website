// Validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?\d{10,13}$/,
  name: /^[a-zA-Z\s'-]+$/
};

// Validation functions
export const validators = {
  name: (value, label = 'Name') => {
    const trimmed = value.trim();
    if (!trimmed) return `${label} is required`;
    if (trimmed.length < 2) return `${label} must be at least 2 characters`;
    if (trimmed.length > 100) return `${label} must be less than 100 characters`;
    if (!VALIDATION_PATTERNS.name.test(trimmed)) return `${label} can only contain letters, spaces, hyphens, and apostrophes`;
    return '';
  },

  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Email is required';
    if (!VALIDATION_PATTERNS.email.test(trimmed)) return 'Please enter a valid email address';
    if (trimmed.length > 254) return 'Email must be less than 254 characters';
    return '';
  },

  phone: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Phone number is required';
    const digitsOnly = trimmed.replace(/[\s\-()]/g, '');
    if (!VALIDATION_PATTERNS.phone.test(digitsOnly)) return 'Please enter a valid phone number (10-13 digits)';
    return '';
  },

  message: (value, minLength = 10, maxLength = 2000) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Message is required';
    if (trimmed.length < minLength) return `Message must be at least ${minLength} characters`;
    if (trimmed.length > maxLength) return `Message must be less than ${maxLength} characters`;
    return '';
  },

  required: (value, label = 'This field') => {
    const trimmed = typeof value === 'string' ? value.trim() : value;
    if (!trimmed) return `${label} is required`;
    return '';
  },

  company: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Company name is required';
    return '';
  }
};

// Helper to create a custom validator
export const createValidator = (rules) => (value) => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return '';
};
