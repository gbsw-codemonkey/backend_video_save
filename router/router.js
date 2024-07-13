const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');

router.post('/video', controller.video);

module.exports = router;
