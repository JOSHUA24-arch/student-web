//calling dependencies

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// setting the routes to the app
const authRouter = require("./ROUTERS/autheticaticationRouter");
const studentRouter = require("./ROUTERS/studentRouters");

app.use(authRouter);
app.use(studentRouter);

// body prser for
app.use(bodyParser.json());

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

app.listen(4000, () => {
  console.log(" app is listening at port 4000");
});
