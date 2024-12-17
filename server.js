
const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");

//const articleRouter = require("./dist/routes/articleRoute");
//const jobRouter = require("./dist/routes/jobRoute");
const emailRouter = require("./dist/routes/emailRoute");

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

app.get("/offices", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/offices.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("/js"));
});

app.listen(3000, (req, res) => {
  console.log(`Server running on..`);
});
