const express = require('express')
const router = express.Router()
const https = require('https')
const Post = require('../models/Post')

const apiUrl = ''

// fetch(apiUrl)
//              .then(response =>{
//                 if(!response.ok){
//                     throw new Error('network response was not ok')
//                 }
//                 return response.json()
//              })
//              .then(postData => {
//                 console.log('User Data',postData)
//              })
//              .catch (error =>{
//                 console.error('Error:',error)
//              })

//Creat Post

// const formData = {
//     image: 'image.jpg',
//     tittle: 'the title',
//     description:'the description',
//     author: 'by the auther'
// }

// fetch(apiUrl, {
//     method: 'POST',
//     headers:{
//         'Content-Type':'application/json',
//     },
//     body:JSON.stringify(formData),
// })
// .then(response =>{
//     if(!response.ok){
//         throw new Error('Network was not ok')
//     }
//     return response.json()
// })
// .then(newPost => {
//     console.log('New Post:', newPost)
// })
// .catch(error =>{
//     console.log('Error', error)
// })
// router.post('/uuid', async (req, res) => {
//         const newPost = new Post({
//             image: req.body.image,
//             title: req.body.title, 
//             description: req.body.description, 
//             author: req.body.author,
//         })

//         try{
//             const savedPost = await Post.save()
//             res.json(savedPost)
//     } catch (err) {
//             res.json({ message: err})
//     }
// })

// //Get All Posts

//  router.get('https://anelehoza.github.io/tyekssecuritycc/news', async (req, res) => {
//      try{
//          const posts = await Post.find()
//          res.json(posts)
//      } catch (err) {
//          res.status(500).json({ message: err.message})
//      }
//  })

// // //Get single post

// // router.get('/:id', (req, res) => {
// //         res.json(req.Post)
// // })

module.exports = router