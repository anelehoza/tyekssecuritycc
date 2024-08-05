const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    } , 
    password: { 
        type: String,
    } ,
    email: {
        type: String,
    } ,

    })

    const newsUser = mongoose.model('newsUser', userSchema )

module.exports = newsUser