const express = require('express');

const adminController = require('../controller/admin')

const router = express.Router()

router.get('/', adminController.getIndex)

module.exports = router