// const express = require('express')
// const router = express.Router()
// const fs = require('fs')
// const path = require('path')
// const Job = require('../models/jobSchema')


// router.get('/createJob', async (req, res) => {
//     try {
//         res.render('createJob')
//     } catch (err) {
//         console.error('Sorry no articles available', err)
//         res.status(500).render( 'createJob', {error: 'Sorry no posts available', job: []})
//     }
// })
// //create job post
//  router.post('/createJob', async (req, res) => {
//      try {
//                   const job = new Job({
//                       title: req.body.title,
//                       content: req.body.content,
//                       closingDate: req.body.closingDate
//                   })
//                    await job.save()
//                  res.status(201).send('Succefully created')
//                   //res.redirect('jobBlog')

//               } catch (err) {
//                   res.status(400).json({
//                       message: err.message
//                   })
//               }
//  })

//  //get all jobs
//  router.get('/careers', async (req, res) => {
//     try {
//         const job = await Job.find().sort('-createdAt').exec()
//         res.render('careers', { job, error: null })
//     } catch (err) {
//         console.error('Sorry no articles available', err)
//         res.status(500).render( 'careers', {error: 'Sorry no posts available', job: []})
//     }
// })
// module.exports = router