const { check, validationResult } = require('express-validator');

// Validation rules for registration
const validateRegister = [
  check('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
  
  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 3 })
    .withMessage('Password must be at least 6 characters long'),
];

// Validation rules for login
const validateLogin = [
  check('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required'),
  
  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required'),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  handleValidationErrors,
};
