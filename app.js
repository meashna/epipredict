const express = require('express');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const app = express();

app.use(express.json());  // Parse JSON request bodies
app.get('/', (req, res) => {
    res.send('Server is running!');
  });
app.use('/', authRoutes);  // Use the auth routes for handling requests
app.use('/patients', patientRoutes);
app.use('/consultations', consultationRoutes);

module.exports = app;
