const Posts = require('../models/postModel')
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
    await Posts.findByIdAndDelete(req.params.id)
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
    const post = await Posts.findById(req.params.id)
    console.log(post)
    res.render('posts/Show', { post })
}


// EXTRA LOGIC (for comments)

module.exports.createComment = async (req, res) => {
    // create a comment by updating the comments property in post
    await Posts.findByIdAndUpdate(req.params.id, {
        // push the req.body to the comments property/field of this post document
        $push: {
            comments: req.body
        }
    })
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.deleteComment = async (req, res) => {
    // delete a comment by updating the comments property in post
    await Posts.findByIdAndUpdate(req.params.id, {
        // pulling out or removing a subdocument  
        $pull: {
            // from the comments property/field
            comments: {
                // with a matching comment id
                _id: req.params.cid
            }
        }
    })
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.indexComment = async (req, res) => {
    // target the comments property 
    const post = await Posts.findById(req.params.id)
    res.send(post.comments)
}

module.exports.showComment = async (req, res) => {
    // find the post and filter it's comments property array
    const post = await Posts.findById(req.params.id)
    const [ comment ] = post.comments.filter(comment => comment._id.toString() === req.params.cid) 
    res.render('comments/Edit', { postId: req.params.id, comment })
}

module.exports.updateComment = async (req, res) => {
    // update a comment by updating an item in the comments property in post

    // find the post with the matching id, then check that post's comments for matching comment id
    await Posts.updateOne({ _id: req.params.id, 'comments._id': req.params.cid }, {
        // set/replace the content 
        $set: {
            // of the comment at index (represented by $) and change its body property   -->    comments[1].body = 'value
            'comments.$.body': req.body.body // req.body is the form data and req.body.body is the updated value of the comment
        }
    })
    res.redirect(`/posts/${req.params.id}`)
}