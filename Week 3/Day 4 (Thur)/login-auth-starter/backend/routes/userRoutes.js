const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')

router.get('/info', userCtrl.info)

module.exports = router