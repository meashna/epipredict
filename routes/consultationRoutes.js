const express = require('express');
const { createConsultation, getConsultationById } = require('../controllers/consultationController');
const { validateConsultation, handleValidationErrors } = require('../validators/consultationValidator');
const router = express.Router();

// Route to create a new consultation
router.post('/create', validateConsultation, handleValidationErrors, createConsultation);

// Route to get consultation data by ID
router.get('/:id', getConsultationById);



module.exports = router;
