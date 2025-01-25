const express = require('express');

const adminController = require('../controller/admin')

const router = express.Router()

router.get('/', adminController.getIndex) // for displaying the homepage

router.post('/short', adminController.postShort) // for proceccing and saving the short url in db

router.get('/short', adminController.getShort) // for displaying only shortened URL

router.get('/urls',adminController.getUrls)

module.exports = router