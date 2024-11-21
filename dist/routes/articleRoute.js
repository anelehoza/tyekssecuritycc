// const express = require('express')
// const router = express.Router()
// const fs = require('fs')
// const path = require('path')
// const Article = require('../models/articleSchema.js')
// const multer = require('multer')


// var storage = multer.diskStorage({
//     destination: "/public/uploads",
//     filename: function(req, file, cb){
//         cb(null,file.filename + "_" + Date.now())
//     }
// })
// const upload = multer({storage: storage})
// //Get All articles

//  router.get('/news', async (req, res) => {
//      try {
//          const articles = await Article.find().sort('-createdAt').exec()
//          res.render('news', { articles, error: null })
//      } catch (err) {
//          console.error('Sorry no articles available', err)
//          res.status(500).render( 'news', {error: 'Sorry no posts available', articles: []})
//      }
//  })


// // router.post('/createPost', upload.single('image'), async (req, res) => {
// //     try {
// //                  const article = new Article ({
// //                      title: req.body.title,
// //                      author: req.body.author,
// //                       content: req.body.content,
// //                      category: req.body.category,
// //                      image: req.file.image,
// //                  })
// //                   await article.save()
// //                 // res.status(201).send('Succefully created')
// //                  res.redirect('blog')

// //              } catch (err) {
// //                  res.status(400).json({
// //                      message: err.message
// //                  })
// //              }
// // })


// router.get('/image/:id',(req,res)=>{
//     image.findById(req.params.id,(err,data)=>{
//         if(!err){
//             res.contentType(data.img.contentType);
//             res.send(data.img.data);
//         }
//     });

// });
// module.exports = router