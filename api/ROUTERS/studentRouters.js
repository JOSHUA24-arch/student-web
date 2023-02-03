const express = require("express");
const mongoose = require("express");
const authLogic = require("../CONTROLLERS/Authorization/authLogic");
const { check, body } = require("express-validator/check");
const studentController = require("../CONTROLLERS/Registration/studentManagement");
import isAuth from "../MIDDLEWARE/isAuth";

const studentRouter = express.Router();

studentRouter.post(
  "/registerStudent",
  [
    body("firstname").trim().isLength({ min: 5 }),
    body("lastname").trim().isLength({ min: 5 }),
  ],
  studentController.createStudent
);

studentRouter.get("/updateStudent/", isAuth, studentController.updateStudent);
studentRouter.delete(
  "/deleteStudent/:studentId",
  studentController.deleteStudent
);

studentRouter.get("/getAllStudent", studentController.getAllStudents);

module.exports = studentRouter;
