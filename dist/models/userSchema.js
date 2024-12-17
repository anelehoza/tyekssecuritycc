const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        max: 30,
    } , 
    password: { 
        type: String,

    } ,
    email: {
        type: String,
        unique: true,
        trim: true,
    } ,
    
    })

    const User = mongoose.model('User', userSchema )

module.exports = User