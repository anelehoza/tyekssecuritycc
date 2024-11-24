
// const express = require("express");
const app = require('./netlify/functions/app');
// const port = 3000;
// const path = require('path')
// const router =express.Router()
// const cors = require("cors");
// const bodyParser = require("body-parser");

// //const emailRouter = require("./dist/routes/emailRoute");

// const dotenv = require("dotenv");
// require("dotenv").config();

// app.use('/', router)
// app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.json());


// app.set("views", ".//views");
// app.set("view engine", "ejs");

// app.use(express.static("./dist/public"));
// app.use(express.static("./uploads"));
// //app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static("public"));

// //Routes

// router.get("/", (req, res) => {
//  res.render('index')
// });

// router.get("/services", (req, res) => {
//   res.render('services')
// });

// router.get("/academy", (req, res) => {
//   res.render('academy')
// });
// router.get("/security-gaurd", (req, res) => {
//   res.render('security-gaurd')
// });

// router.get("/electronic", function (req, res) {
//   res.render('elecronic-security')
// });

// router.get("/patrols", function (req, res) {
//   res.render('patrols')});


// router.get("/intergrated", function (req, res) {
//   res.render('intergrated')
// });


// router.get("/offices", function (req, res) {
//   res.render('offices')
// });

// router.get("/news", function (req, res) {
//   res.render('news')
// });
// router.get("/careers", function (req, res) {
//   res.render('careers')
// });

app.listen(3000, (req, res) => { console.log(`Server running on..`);
});
