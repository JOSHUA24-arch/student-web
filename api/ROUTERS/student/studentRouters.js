const express = require("express");
const mongoose = require("express");
const authLogic = require("../CONTROLLERS/Authorization/authLogic");
const { check, body } = require("express-validator/check");
const studentController = require("../../CONTROLLERS/Registration/studentManagement");
import isAuth from "../../MIDDLEWARE/isAuth";
const authLogic = require("../../CONTROLLERS/Authorization");

const studentRoutes = express.Router();

studentRoutes.post("/login", authLogic.studentLogin);

studentRoutes.post(
  "/registerStudent",
  [
    body("firstname").trim().isLength({ min: 4 }),
    body("lastname").trim().isLength({ min: 4 }),
  ],
  studentController.createStudent
);

studentRoutes.get("/viewAllCorses", isAuth, studentController.viewAllCourse);
studentRoutes.get(
  "/openCourse/:courseId",
  isAuth,
  studentController.openCourse
);

studentRoutes.post(
  "enrollCourse/:courseId",
  isAuth,
  studentController.enrollToCourse
);

module.exports = studentRoutes;
