const express = require('express');
const { register, login } = require('../controllers/authController');
const { validateRegister, validateLogin, handleValidationErrors } = require('../validators/authValidator');
const router = express.Router();

router.post('/register', validateRegister, handleValidationErrors, register);
router.post('/login', validateLogin, handleValidationErrors, login);


module.exports = router;
