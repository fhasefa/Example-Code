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
    res.render('posts/Index', { posts })
}

module.exports.new = async (req, res) => {
    res.render('posts/New')
}

module.exports.delete = async (req, res) => {
    // first find the post, store it in a variable, then delete it from database
    const post = await Posts.findByIdAndDelete(req.params.id)
    // delete all comments where the comment id 
    await Comments.deleteMany({ _id: { 
        // equals/matches any comment ids in this array
        $in: post.comments 
    }})
    res.redirect('/posts')
}

module.exports.update = async (req, res) => {
    await Posts.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        await Posts.create(req.body)
        res.redirect('/posts')
    } catch(err) {
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    const post = await Posts.findById(req.params.id)
    console.log(post)
    console.log('edit route')
    res.render('posts/Edit', { post })
}

module.exports.show = async (req, res) => {
    // populate replaces the ids with actual documents/objects we can use
    const post = await Posts.findById(req.params.id).populate('comments')
    res.render('posts/Show', { post })
}


// EXTRA LOGIC (for comments)

module.exports.createComment = async (req, res) => {
    // Alternative to Comments.create():
    // const comment = new Comments(req.body)
    // comment.save()

    // create a document in our comments collection
    const comment = await Comments.create(req.body)
    // find the post 
    await Posts.findByIdAndUpdate(req.params.id, {
        // and push the new comment document's id
        $push: {
            // to the post's comments field/property
            comments: comment._id
        }
    })
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.deleteComment = async (req, res) => {
    // first use the id to delete the comment from the comments collection
    await Comments.findByIdAndDelete(req.params.cid)
    // then use the post's id to find the post
    await Posts.findByIdAndUpdate(req.params.id, {
        // and pull/remove the reference id (to the comment) from
        $pull: {
            // the comments array
            comments: req.params.cid
        }
    })
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.indexComment = async (req, res) => {
    // target the comments property 
    const post = await Posts.findById(req.params.id).populate('comments')
    res.send(post.comments)
}

module.exports.showComment = async (req, res) => {
    // find the post and filter it's comments property array
    const comment = await Comments.findById(req.params.cid)
    res.render('comments/Edit', { postId: req.params.id, comment })
}

module.exports.updateComment = async (req, res) => {
    // update a comment by updating an item in the comments property in post
    await Comments.findByIdAndUpdate(req.params.cid, req.body)
    res.redirect(`/posts/${req.params.id}`)
}