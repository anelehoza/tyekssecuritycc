const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    image: String,
    title: String, 
    description: String, 
    author: String,
      
})

const postModel = new mongoose.model("Post", PostSchema)
const post = new postModel({ image:"image will go here",title:"the title",description:"description", author: "by me"})
post.save() 
module.exports = mongoose.model('Post', PostSchema)