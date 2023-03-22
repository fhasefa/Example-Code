const Posts = require('../models/postModel')
const Comments = require('../models/commentModel')

module.exports.createComment = async (req, res) => {
    // create a document in our comments collection
    const comment = await Comments.create(req.body)
    // find the post 
    await Posts.findByIdAndUpdate(req.params.pid, {
        // and push the new comment document's id
        $push: {
            // to the post's comments field/property
            comments: comment._id
        }
    })
    res.json(comment)
}

module.exports.deleteComment = async (req, res) => {
    // first use the id to delete the comment from the comments collection
    await Comments.findByIdAndDelete(req.params.id)
    // then use the post's id to find the post
    await Posts.findByIdAndUpdate(req.params.pid, {
        // and pull/remove the reference id (to the comment) from
        $pull: {
            // the comments array
            comments: req.params.id
        }
    })
    res.json({ message: 'deleted successfully' })
}

module.exports.indexComment = async (req, res) => {
    // target the comments property 
    const post = await Posts.findById(req.params.pid).populate('comments')
    res.json(post.comments)
}

module.exports.showComment = async (req, res) => {
    // find the post and filter it's comments property array
    console.log('got here')
    const comment = await Comments.findById(req.params.id)
    console.log(comment)
    res.json(comment)
}

module.exports.updateComment = async (req, res) => {
    // update a comment by updating an item in the comments property in post
    console.log('update comment!')
    await Comments.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: 'updated successfully' })
}