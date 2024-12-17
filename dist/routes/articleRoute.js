const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const Article = require('../models/articleSchema.js')

const multer = require('multer')


var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"./dist/public/uploads")
    },
    filename: function(req, file, cb){
        cb(null, file.filename+ "_" + Date.now() + "_"+ file.originalname)
    }
})

var upload = multer({storage: storage}).single("image")

//Get All articles

 router.get('/news', async (req, res) => {
     try {
         const articles = await Article.find().sort('-createdAt').exec()
         const image = path.join(__dirname + '../dist/public/uploads')
         res.render('news', { articles, error: null })
     } catch (err) {
         console.error('Sorry no articles available', err)
         res.status(500).render( 'news', {error: 'Sorry no posts available', articles: []})
     }
 })

 // Get job listsing page
 router.get('/postlisting', async (req, res) => {
    try {
        const articles = await Article.find().sort('-createdAt').exec()
        const image = path.join(__dirname + '../dist/public/uploads')
        res.render('postsListings', { articles, error: null })
    } catch (err) {
        console.error('Sorry no articles available', err)
        res.status(500).render( 'postsListings', {error: 'Sorry no posts available', articles: []})
    }
 })

 router.get('/createPost', async (req, res) => {
    try {
        res.render('createPost')
    } catch (err) {
        console.error('Sorry no articles available', err)
        res.status(500).render( 'createPost', {error: 'Sorry no posts available', job: []})
    }
})

router.post('/createPost', upload, async (req, res) => {
    try {
                 const article = new Article ({
                      title: req.body.title,
                      author: req.body.author,
                      content: req.body.content,
                      category: req.body.category,
                      image: req.file.filename
                 })
                  await article.save()
                 //res.status(201).send('Succefully created')
                 res.redirect('/news')

             } catch (err) {
                 res.status(400).json({
                     message: err.message
                 })
             }
})

router.get('/editPost', (req, res) => {
    res.render('editPost')
})
//Update article
    router.put('/blog/:id', async (req, res) =>{
     const id = req.body.id
        try {
            const article = await Article.findOneAndUpdate(id, req.body, {new: true})
            if (!article) {
                return res.status(404).json({
                    message: 'Article not found'
                })
            }
            res.json({ message: 'Article updated successfully '})
        } catch (err) {
            res.status(500).json({
                message : err.message
            })
        }
    })



//Delete article
router.delete('/blog/:id', async (req, res) =>{
    const id = req.params.id
      try {
           await Article.findOneAndDelete(id)
          if (!id) {
              return res.status(404).json({
                  message: 'Article not found'
              })
          }
          res.json({ message: 'Article Deleted Successfully '})
      } catch (err) {
          res.status(500).json({
              message : err.message
          })
      }
 })

module.exports = router