const express = require('express')

const router = express.Router()

const postControl = require('../controllers/postController')

// seed 
router.get('/seed', postControl.seed)

// index
router.get('/', postControl.index)

// new
router.get('/new', postControl.new)

// delete
router.delete('/:id', postControl.delete)

// update
router.put('/:id', postControl.update)

// create
router.post('/', postControl.create)

// edit 
router.get('/:id/edit', postControl.edit)

// show
router.get('/:id', postControl.show)




// EXTRA ROUTES (for comments)

router.post('/:id/comments', postControl.createComment)

router.delete('/:id/comments/:cid', postControl.deleteComment)

router.get('/:id/comments', postControl.indexComment)

router.get('/:id/comments/:cid', postControl.showComment)

router.put('/:id/comments/:cid', postControl.updateComment)


module.exports = router