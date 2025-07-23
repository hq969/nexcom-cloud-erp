const express = require('express');
const router = express.Router();
const { getEmployees, addEmployee } = require('./controllers/hrController');

router.get('/', getEmployees);
router.post('/', addEmployee);

module.exports = router;
