const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const fruitController = require('../controllers/fruitController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', fruitController.index)

// Setup a "new" route for creating fruit
router.get('/new')

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:index', fruitController.show)


module.exports = router