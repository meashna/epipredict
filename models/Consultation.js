const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true }, // Reference to the patient
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the doctor
  symptoms: [{ type: String, required: true }],  // Array of symptoms as strings
  diagnosis: { type: String },  // Optional diagnosis
  prescription: { type: String },  // Optional prescription
  consultationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Consultation', ConsultationSchema);

