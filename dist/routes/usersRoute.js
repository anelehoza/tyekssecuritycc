const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require('path')
const User = require('../models/userSchema')
const bcrypt = require('bcrypt')


//get signin form

router.get('/signin', (req, res) =>{
    res.render('signin')
})
 //get user

 router.get('/users', async (req, res) => {
    try {
        const users = await User.findOne({username: req.body.username})
        res.send(users)
        // res.render('careers', { job, error: null })
    } catch (err) {
        console.error('Sorry no user', err)
        res.status(500).render( 'careers', {error: 'Sorry no user with this email', user: []})
    }
})

// Create User 
router.post('/signup', async(req, res) => {
    try{
        const user = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
        await user.save()
        res.send('Successfully created')
    }catch {
        res.send('check your detials carefully')
    }
 

})
router.post('/signin', async(req, res) =>{
    const user = await User.findOne({username:req.body.username, password:req.body.password})
    if (user){
        res.redirect('/postListing')
    } else {
        res.send('incorrect username or password')
    }
    
})
module.exports = router