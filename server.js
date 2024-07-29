const mongoose = require('mongoose')
const express = require('express')
const articleRouter = require('./dist/routes/articleRoute')
//const bodyParser = require('body-parser')
//const cors = require('cors')
const app = express()
const port = process.env.PORT || 5001
const multer = require('multer')
const path = require('path')
const upload = multer({dest: 'uploads/'})


require('dotenv').config()
//app.use(cors())

 app.use(express.urlencoded({extended:false}))
 app.use(express.json())


 mongoose.connect('mongodb://localhost:27017/News',{
     useNewUrlParser: true,
     useUnifiedTopology:true
 })        .then(() =>{
             console.log('database connected')
     })
           .catch(err => console.log(err))

 app.use('/', articleRouter)
 

// // //Import Routes

 app.set('views','./dist/views')
 app.set('view engine', 'ejs');

 app.use(express.static('./dist/public'));
 app.use( express.static('./uploads'))

 //Routes
  app.use('/', articleRouter)
 
  app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '/dist/index.html'))
     app.use(express.static(path.join(__dirname, '/dist/public/css')));
     app.use('/static',express.static('./dist/assets'));
     app.use(express.static('/dist/public/js'));
 })

 app.get('/services', function(req, res) {
     res.sendFile(path.join(__dirname + '/dist/services.html'))
     app.use(express.static(path.join(__dirname, '/css')));
     app.use('/assets',express.static('assets'));
     app.use(express.static('js'));
 })
 app.get('/offices', function(req, res) {
     res.sendFile(path.join(__dirname + '/dist/offices.html'))
     app.use(express.static(path.join(__dirname, '/css')));
     app.use('/assets',express.static('assets'));
     app.use(express.static('js'));
 })
  app.get('/careers', function(req, res) {
      res.sendFile(path.join(__dirname + '/dist/careers.html'))
      app.use(express.static(path.join(__dirname, '/css')));
      app.use('/assets',express.static('assets'));
      app.use(express.static('js'));
  })
  app.get('/academy', function(req, res) {
      res.sendFile(path.join(__dirname+ '/dist/academy.html'))
      app.use(express.static(path.join(__dirname, '/css')));
      app.use('/assets',express.static('assets'));
      app.use(express.static('js'));
  })
  app.get('/security-gaurd', function(req, res) {
      res.sendFile(path.join(__dirname+ '/dist/security-gaurd.html'))
      app.use(express.static(path.join(__dirname, '/css')));
      app.use('/assets',express.static('assets'));
      app.use(express.static('js'));
  })

  app.get('/electronic', function(req, res) {
     res.sendFile(path.join(__dirname + '/dist/electronic-security.html'))
     app.use(express.static(path.join(__dirname, '/css')));
     app.use('/assets',express.static('assets'));
     app.use(express.static('js'));
 })
 app.get('/patrols', function(req, res) {
     res.sendFile(path.join(__dirname + '/dist/patrols.html'))
     app.use(express.static(path.join(__dirname, '/css')));
     app.use('/assets',express.static('assets'));
     app.use(express.static('js'));
 })
 app.get('/intergrated', function(req, res) {
     res.sendFile(path.join(__dirname + '/dist/intergrated.html'))
     app.use(express.static(path.join(__dirname, '/css')));
     app.use('/assets',express.static('assets'));
     app.use(express.static('/js'));
})

  app.get('/offices', function(req, res) {
     res.sendFile(path.join(__dirname+ '/dist/offices.html'))
     app.use(express.static(path.join(__dirname, '/css')));
     app.use('/assets',express.static('assets'));
     app.use(express.static('/js'));
 })
 
 app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
})


