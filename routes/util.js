const express = require('express');
const utilController = require('../controller/util')

const router = express.Router()


router.get('/:url', utilController.getShortUrl) // for fetching the short url

module.exports = router