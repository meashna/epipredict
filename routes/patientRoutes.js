const express = require('express');
const { registerPatient, getPatientById,getPatientConsulations ,getAllPatients} = require('../controllers/patientController');
const { validatePatientRegistration, handleValidationErrors } = require('../validators/patientValidator');
const router = express.Router();


// Route to register a new patient
router.post('/register', validatePatientRegistration, handleValidationErrors, registerPatient);

//Route to get all patients
router.get('/all', getAllPatients);

//Route to get patient consulations
router.get('/:id/consultations', getPatientConsulations);

// Route to get patient data by ID
router.get('/:id', getPatientById);


module.exports = router;
