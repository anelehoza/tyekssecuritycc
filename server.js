
const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");

//const emailRouter = require("./dist/routes/emailRoute");

const dotenv = require("dotenv");
require("dotenv").config();




app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


app.set("views", "./dist/views");
app.set("view engine", "ejs");

app.use(express.static("./dist/public"));
app.use(express.static("./uploads"));
//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static("public"));

//Routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});

app.get("/services", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/services.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});
app.get("/offices", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/offices.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});

app.get("/academy", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/academy.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});
app.get("/security-gaurd", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/security-gaurd.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});

app.get("/electronic", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/electronic-security.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});
app.get("/patrols", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/patrols.html"));
  app.use(express.static(path.join(__dirname, "/css")));
  app.use("/assets", express.static("assets"));
  app.use(express.static("js"));
});
app.get("/intergrated", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/intergrated.html"));
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

app.listen(3000, (req, res) => { console.log(`Server running on..`);
});
