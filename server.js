
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const session = require('express-session')
const hash = require('pbkdf2-password')()

const cors = require("cors");
const bodyParser = require("body-parser");

const articleRouter = require("./dist/routes/articleRoute");
const jobRouter = require("./dist/routes/jobRoute");
const emailRouter = require("./dist/routes/emailRoute");
const usersRouter = require("./dist/routes/usersRoute");

const dotenv = require("dotenv");
require("dotenv").config();


const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "uploads/" });

const corsOption = {
   origin: "http://localhost:3000",
};
app.use(cors(corsOption));

 app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'shhhh, very secret'
}))

app.use(function(req, res, next){
  let err = req.session.error
  let msg = req.session.sucess
  delete req.session.error
  delete req.session.sucess
  res.locals.message = ''
  if (err) res.locals.message = '<p class="msg error' +err + '<p>'
  if (msg) res.locals.message = '<p class="msg success' +msg + '<p>'
  next()
})

mongoose
   .connect(
     'mongodb://localhost:27017/News',
     { useNewUrlParser: true }
   )
   .then(() => console.log('MongoDB Connected'))
   .catch(err => console.log(err));

app.use("/", articleRouter);
app.use("/", jobRouter);
app.use("/", emailRouter)
app.use("/", usersRouter)

// // //Import Routes

app.set("views", "./dist/views");
app.set("view engine", "ejs");

app.use(express.static("./dist/public"));
app.use(express.static("./dist/public/uploads"));
//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static("public"));

//Routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});

// app.get("/services", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/services.html"));
//   app.use(express.static(path.join(__dirname, "/css")));
//   app.use("/assets", express.static("assets"));
//   app.use(express.static("js"));
// });
// app.get("/offices", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/offices.html"));
//   app.use(express.static(path.join(__dirname, "/css")));
//   app.use("/assets", express.static("assets"));
//   app.use(express.static("js"));
// });

// app.get("/academy", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/academy.html"));
//   app.use(express.static(path.join(__dirname, "/css")));
//   app.use("/assets", express.static("assets"));
//   app.use(express.static("js"));
// });
// app.get("/security-gaurd", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/security-gaurd.html"));
//   app.use(express.static(path.join(__dirname, "/css")));
//   app.use("/assets", express.static("assets"));
//   app.use(express.static("js"));
// });

// app.get("/electronic", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/electronic-security.html"));
//   app.use(express.static(path.join(__dirname, "/css")));
//   app.use("/assets", express.static("assets"));
//   app.use(express.static("js"));
// });
// app.get("/patrols", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/patrols.html"));
//   app.use(express.static(path.join(__dirname, "/css")));
//   app.use("/assets", express.static("assets"));
//   app.use(express.static("js"));
// });
app.get("/news", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/news.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("/js"));
});

// app.get("/offices", function (req, res) {
//   res.sendFile(path.join(__dirname + "/dist/offices.html"));
//   app.use(express.static(path.join(__dirname, "/css")));
//   app.use("/assets", express.static("assets"));
//   app.use(express.static("/js"));
// });
// app.get('/users', (req, res) => {
//   const users = newsUser.find()
//   console.log(users)

// })

// hash({password: 'newsusers'}, function(err, pass, salt, hash) {
//   if(err) throw err
//   // store the salt & hash in the database
//   users.users.salt = salt
//   users.users.hash = hash
// })

// function authenticate(name, pass, fn) {
//   if(!module.parent) console.log('authenticating %s:%s', name, pass)
//     let user = users[name]
//   //querry db for given username
//   if(!user) return fn(null, null)
  
//   hash({password: pass, salt: user.salt}, function (err, pass, salt, hash) {
//     if (err) return fn(err)
//       if(hash === user.hash) return fn(null, user)
//         fn(null, null)
//   })
// }

// function restrict(req, res, next) {
//   if (req.session.user) {
//     next()
//   } else {
//     req.session.error = 'Access denied'
//     res.redirect('/signIn')
//   }
// }

// app.get('/news', function(req, res) {
//   res.redirect('/signIn')
// })

// app.get('/rescrited', restrict, function(req, res) {
//   res.send('Oops you are not allowed to be here, click to <a href="/signOut">sign out </a>')
// })

// app.get('/signOut', function(req, res) {
//   //destroy the user's session to log them out
//   //wil be re-created i next request
//   req.session.destroy(function() {
//     res.redirect('postsListings')
//   })
// })

// app.get('/signIn', function(req, res){
//   if(!req.body) return res.sendStatus(400)
//     authenticate(req.body.username, req.body.password, function(err, user){
//   if (err) return next(err)
//   if (user) {
//     //Regenerate session when signing in
//     // to prevent fixation
//     req.session.regenerate(function(){
//       //store user's primary key
//       req.session.user = user
//       req.session.sucess = 'Authenticated as ' + user.name + 'click to <a href="/restricted">/restricted</a>.'
//       res.redirect(req.get('Referrer') || '/news')
//     })
//   } else {
//     req.session.error = 'Authentication failed, please check your ' + ' username and password.'
//     res.redirect('signIn')
//   }})
// })


app.listen(port, (req, res) => {
  console.log(`Server running on..${port}`);
});
