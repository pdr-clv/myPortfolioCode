const express = require('express');

const controller = require('./controller');

const router = express.Router();

router.route('/sendmail').post(controller.sendEmail);

module.exports = router;



