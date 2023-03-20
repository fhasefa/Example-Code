
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// We could define a comments schema like this...

// const commentSchema = new Schema({
//    body: { type: String },
//    user: { type: String, default: 'Bob' }
// })

// and then use it in post schema...

// comments: [commentSchema]

const postSchema = new Schema({
   subject: { type: String },
   body: { type: String },
   user: { type: String, default: 'Bob' },
   comments: [
      {
         body: { type: String },
         user: { type: String, default: 'Bob' }
      }
   ]
}, { timestamps: true })

const Post = mongoose.model('posts', postSchema)

module.exports = Post