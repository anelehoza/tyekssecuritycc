const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String, 
    password: String,
    email: String,

    })

    const UserModel = new mongoose.model("User", UserSchema)
    const user = new UserModel({username :"communications", password:"communications@1" ,email:"communication@tyekssecurity.co.za"})
    user.save()

module.exports = mongoose.model('User', UserSchema)