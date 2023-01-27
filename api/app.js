//calling dependencies

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// setting the routes to the app
const authRouter = require("./ROUTERS/autheticaticationRouter");
const studentRouter = require("./ROUTERS/studentRouters");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// body prser for
app.use(bodyParser.json());

app.use(authRouter);
app.use(studentRouter);

// Incase of the "" errors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose
  .connect("mongodb+srv://marenga14:kipipa14@cluster0.wctmmyl.mongodb.net/test")
  .then((result) => {
    app.listen(4000, () => {
      console.log(" app is listening at port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
