const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const articleRouter = require('./routes/articleRoute')
const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/News',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
        
        .then(() =>{
            console.log('database connected')
    })
          .catch(err => console.log(err))

 
app.use('/api/articles', articleRouter)

// //Import Routes
// // const postsRouter = require('./routes/post')
//  //const userRouter = require('./routes/user')


// //Routes
// const path = require('path')
// app.use(express.static('js'));
// app.get('/home', function(req, res) {
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     res.sendFile(path.join(__dirname + '/index.html'))
//     app.use(express.static('/js'));
// })
// app.get('/careers', function(req, res) {
//     res.sendFile(path.join(__dirname + '/careers.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })
// app.get('/services/elecronicsecurity', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/elecronic.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })
// app.get('/services/intergratedservices', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/intergrated.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })
// app.get('/News', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/newsletter.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })
// app.get('/offices', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/offices.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })
// app.get('/services/patrols&monitoring', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/patrols.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));})

// app.get('/News/createpost', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/newsposts.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })
// app.get('/services', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/services.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })

// app.get('/services/onsitesecurityguards', function(req, res) {
//     res.sendFile(path.join(__dirname+ '/security-gaurd.html'))
//     app.use(express.static(path.join(__dirname, '/css')));
//     app.use('/assets',express.static('assets'));
//     app.use(express.static('/js'));
// })
// // app.get('/post', (req, res) =>{
// //     res.send('will see a single point')
// // })

// //Require all models



// //app.use('/Users', userRouter)
// //app.use('/Posts', postsRouter)
// //app.use(express.static('dist'))

app.listen(port, (req, res) => {
     console.log(`Server running on port ${port}`)
 })

