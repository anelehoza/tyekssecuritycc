const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const Article = require('../models/articleSchema.js')
const multer = require('multer')


var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"./uploads")
    },
    filename: function(req, file, cb){
        cb(null, file.filename+ "_" + Date.now() + "_"+ file.originalname)
    }
})

var upload = multer({storage: storage
}).single("image")
//Get All articles

router.get('/news', async (req, res) => {
    try {
        const articles = await Article.find()
        const image = path.join(__dirname + '/uploads')
        res.render('news', { articles, error: null })
    } catch (err) {
        console.error('Sorry no articles available', err)
        res.status(500).render( 'news', {error: 'Sorry no posts available', articles: []})
    }
})

  router.get('/createPost', async (req, res) => {
      try {
          res.render('createPost')
      } catch (err) {
          console.error('Sorry no articles available', err)
          res.status(500).render( 'createPost', {error: 'Sorry no posts available', articles: []})
      }
  })

//Create article
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
                    
                   res.status(201).send('Succefully created')
               } catch (err) {
                   res.status(400).json({
                       message: err.message
                   })
               }
 })
// Get single post
//  router.get('/:id', async (req, res) => {
//     try {
//         const article = await Article.findById(req.params.id);
//         if (article == null) {
//             return res.status(404).json({
//                 message: 'Article not found'
//             });
//         }
//         res.json(article)
//     } catch (err) {
//         return res.status(500).json({
//             message: err.message
//         });
//     }
// });


// //Update article
//  router.put('/:id', async (req, res) =>{
//      try {
//          const article = await Article.findByIdAndUpdate(
//              req.params.id, req.body, {new: true})
//          if (!article) {
//              return res.status(404).json({
//                  message: 'Article not found'
//              })
//          }
//          res.json({ message: 'Article updated successfully '})
//      } catch (err) {
//          res.status(500).json({
//              message : err.message
//          })
//      }
//  })

//  //Delete article
  router.delete('/news:id', async (req, res) =>{
     try {
         const article = await Article.findByIdAndDelete(
             req.params.id)
         if (!article) {
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