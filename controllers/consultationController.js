const Consultation = require('../models/Consultation');
const Patient = require('../models/Patient');

// Create a new consultation
// Create a new consultation
exports.createConsultation = async (req, res) => {
  const { patientId, doctorId, symptoms, diagnosis, prescription } = req.body;

  try {
    // Step 1: Create the consultation
    const consultation = new Consultation({
      patientId,
      doctorId,
      symptoms,
      diagnosis,
      prescription,
    });

    await consultation.save();

    // Step 2: Find the patient by ID from the Patient model (NOT the variable 'patient')
    const patient = await Patient.findById(patientId); // Use 'Patient' model here
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Add the new consultation's ID into the patient's consultations array
    patient.consultations.push(consultation._id);

    // Save the updated patient document
    await patient.save();

    res.status(201).json({ message: 'Consultation created successfully', consultation });
  } catch (err) {
    res.status(500).json({ error: 'Error creating consultation', details: err.message });
  }
};


// Get consultation data by ID
exports.getConsultationById = async (req, res) => {
  const { id } = req.params;

  try {
    const consultation = await Consultation.findById(id)
      .populate('patientId', 'patientName')
      .populate('doctorId', 'username');
    if (!consultation) {
      return res.status(404).json({ error: 'Consultation not found' });
    }
    res.json(consultation);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving consultation data' });
  }
};


