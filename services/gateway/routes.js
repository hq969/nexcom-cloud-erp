const express = require('express');
const router = express.Router();

// You can use http-proxy or axios to proxy requests to microservices

router.get('/', (req, res) => res.send('API Gateway'));

module.exports = router;
