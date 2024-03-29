const express = require('express')

const router = express.Router()

const commentControl = require('../controllers/commentController')

// "/:pid/" is the URL Param for the id of the post that the comment is related to
router.post('/:pid/', commentControl.createComment)
// "/c/" stands for comment followed by that comment's id
router.delete('/:pid/c/:id', commentControl.deleteComment)

router.get('/:pid/', commentControl.indexComment)

router.get('/:pid/c/:id', commentControl.showComment)

router.put('/:pid/c/:id', commentControl.updateComment)

module.exports = router