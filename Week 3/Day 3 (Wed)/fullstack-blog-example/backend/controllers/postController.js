const Posts = require('../models/postModel')
const Comments = require('../models/commentModel')

const posts = require('../models/posts')

module.exports.seed = async (req, res) => {
    await Posts.deleteMany({})
    await Posts.create(posts)
    res.redirect('/posts')
}

module.exports.index = async (req, res) => {
    const posts = await Posts.find().sort({ createdAt: 1 })
    res.json(posts)
}

module.exports.delete = async (req, res) => {
    // first find the post, store it in a variable, then delete it from database
    const post = await Posts.findByIdAndDelete(req.params.id)
    // delete all comments where the comment id 
    await Comments.deleteMany({ _id: { 
        // equals/matches any comment ids in this array
        $in: post.comments 
    }})
    res.json({ message: 'deleted successfully' })
}

module.exports.update = async (req, res) => {
    await Posts.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: 'updated successfully' })
}

module.exports.create = async (req, res) => {
    try {
        const post = await Posts.create(req.body)
        res.json(post)
    } catch(err) {
        res.json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    // populate replaces the ids with actual documents/objects we can use
    const post = await Posts.findById(req.params.id).populate('comments')
    res.json(post)
}


