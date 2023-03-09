const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const fruitController = require('../controllers/fruitController')

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', fruitController.index)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:index', fruitController.show)

module.exports = router