const express = require('express');
const router = express.Router();
const { getStudents, getLoggedStudent, updateLoggedStudent } = require('../controllers/students');

router.get('/', getStudents);
router.get('/logged-student', getLoggedStudent);
router.put('/logged-student', updateLoggedStudent);

module.exports = router;
