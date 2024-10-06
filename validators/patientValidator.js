const { check, validationResult } = require('express-validator');

// Validation rules for patient registration
const validatePatientRegistration = [
  check('doctorId')
    .notEmpty()
    .withMessage('Doctor ID is required')
    .isMongoId()
    .withMessage('Doctor ID must be a valid MongoDB ObjectId'),
  
  check('patientName')
    .trim()
    .notEmpty()
    .withMessage('Patient name is required')
    .isLength({ min: 3 })
    .withMessage('Patient name must be at least 3 characters long'),

  check('gender')
    .trim()
    .notEmpty()
    .withMessage('Gender is required')
    .isIn(['Male', 'Female', 'Other'])
    .withMessage('Gender must be Male, Female, or Other'),

  check('age')
    .isInt({ min: 0 })
    .withMessage('Age must be a valid number greater than or equal to 0'),

  check('height')
    .isFloat({ min: 0 })
    .withMessage('Height must be a positive number'),

  check('weight')
    .isFloat({ min: 0 })
    .withMessage('Weight must be a positive number'),

  check('contactInfo')
    .optional()
    .isString()
    .withMessage('Contact info must be a valid string'),
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
  validatePatientRegistration,
  handleValidationErrors,
};
