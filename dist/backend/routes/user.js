const express = require('express')
const router = express.Router()
const User = require('../models/User')

//Get all user

// router.get('/', async (req, res) => {
//     try{
//         const users = await User.find()
//         res.json(users)
//     } catch (err) {
//         res.status(500).json({ message: err.message})
//     }
// })

// //Get All Users
// router.get('/:id', getUser, (req, res) => {
//     res.json(req.User)
// })

//Create a new User 
// router.post('/', async (req, res) => {
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         age: req.body.name
//     })
//   try {
//     const newUser = await user.save()
//     res.status(201).json(newUser)
//     rea.status(400).json({ message: err.message})
//   }catch (err) {

//   }

// })

//Update a user 

// router.put('/:id', getUser, async (req, res) => {
//     if (req.body.name = req.body.name != null) {
//         res.user.name = req.body.name
//     }
    
//     if (req.body.email != null) {
//         res.user.email = req.body.email
//     }

//     if (req.body.age != null) {
//         res.user.age = req.body.age
//     }

//     try {
//         const updateUser = await res.user.save()
//         res.json(updateUser)
//     }catch (err) {
//         res.status(500).json({ message: err.message})
//     }
// })

// //Delete a user 

// router.delete('/:id', getUser, async (req, res) => {
//     try {
//     await res.user.remove();
//     res.json({ message: 'User deleted' });
//     } catch (err) {
//     res.status(500).json({ message: err.message });
//     }
//     });

//     async function getUser(req, res, next) {
//         let user;
//         try {
//         user = await User.findById(req.params.id);
//         if (user == null) {
//         return res.status(404).json({ message: 'Cannot find user' });
//         }
//         } catch (err) {
//         return res.status(500).json({ message: err.message });
//         }
        
//         res.user = user;
//         next();
//         }
        
        module.exports = router;