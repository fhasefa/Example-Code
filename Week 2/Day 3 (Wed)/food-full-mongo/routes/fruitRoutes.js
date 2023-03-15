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
router.get('/new', fruitController.new)

// Setup a "clear" route for removing all data from fruits collection
router.delete('/clear', fruitController.clear)

// Setup a "delete" route for removing a specific fruit
router.delete('/:id', fruitController.delete)

// Setup a "update" route for updating a specific fruit
router.put('/:id', fruitController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', fruitController.seed)

// Setup a "create" route for adding fruit data
router.post('/', fruitController.create)

// Setup a "edit" route for editing a fruit
router.get('/:id/edit', fruitController.edit)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:id', fruitController.show)


module.exports = router