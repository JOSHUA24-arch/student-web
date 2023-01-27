const express = require("express");
const mongoose = require("express");
const authLogic = require("../CONTROLLERS/authLogic");

const authRouter = express.Router();

authRouter.post("/login", authLogic.studentLogin);

module.exports = authRouter;
