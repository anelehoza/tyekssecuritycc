const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "Username is required",
        max: 30,
    } , 
    password: { 
        type: String,
        required: "Password is required",
        select: "false",
        max: 25
    } ,
    email: {
        type: String,
        required: "email is required",
        unique: true,
        trim: true,
    } ,

    })

    const newsUser = mongoose.model('newsUser', userSchema )

module.exports = newsUser