const { check, validationResult } = require('express-validator');

// Validation rules for creating a consultation
const validateConsultation = [
  check('patientId')
    .notEmpty()
    .withMessage('Patient ID is required')
    .isMongoId()
    .withMessage('Patient ID must be a valid MongoDB ObjectId'),

  check('doctorId')
    .notEmpty()
    .withMessage('Doctor ID is required')
    .isMongoId()
    .withMessage('Doctor ID must be a valid MongoDB ObjectId'),

  check('symptoms')
    .isArray({ min: 1 })
    .withMessage('At least one symptom is required')
    .custom((value) => value.every((symptom) => typeof symptom === 'string'))
    .withMessage('Each symptom must be a string'),

  check('diagnosis')
    .optional()
    .isString()
    .withMessage('Diagnosis must be a valid string'),

  check('prescription')
    .optional()
    .isString()
    .withMessage('Prescription must be a valid string'),
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
  validateConsultation,
  handleValidationErrors,
};
