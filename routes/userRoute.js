const express = require('express')
const router = express.Router()
const path = require('path')
const cors = require('cors')
const newsUser = require('../models/userSchema.js')

// const corsOption = {
//     origin: ['http://localhost:5000'],
// }


//Get login page
router.get('/userLogin', async (req, res) => {
    try {
        res.render('userLogin')
    } catch (err) {
        res.status(500).render( 'userLogin', {error: 'Sorry cannot find this page'})
    }
})

//Get news User form 
router.get('/createUser', async (req, res) => {
    try {
        res.render('createUser')
    } catch (err) {
        res.status(500).render( 'createUser', {error: 'Sorry cannot find this page'})
    }
})

//Create news user
router.post('/createUser', async (req, res) =>{
    try {
        const newsuser = new newsUser ({
           username: req.body.username,
           password: req.body.password,
           email: req.body.email,
        })
         await newsuser.save()
        res.status(201).send('Succefully created')
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
})

//Get User
 router.get('/userLogin', async (req, res) =>{
     try {
         const newsuser = await newsUser.find()
         if(newsuser){
            res.render('createPost')
         }else {
            res.send('incorrect username or password')
         }
     } catch (err){
         res.status(500).send({error: 'No user matching your credentials '})
     }
 })

module.exports = router