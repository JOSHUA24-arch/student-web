const express = require("express");
const mongoose = require("express");
const authLogic = require("../CONTROLLERS/authLogic");
const studentController = require("../CONTROLLERS/studentManagement");

const studentRouter = express.Router();

studentRouter.post(
  "/registerStudent",
  [
    body("firstname").trim().isLength({ min: 5 }),
    body("lastname").trim().isLength({ min: 5 }),
  ],
  studentController.createStudent
);

studentRouter.get("/updateStudent/:studentId", studentController.updateStudent);
studentRouter.delete(
  "deleteStudent/:studentId",
  studentController.deleteStudent
);

studentRouter.get("getAllStudent", studentController.getAllStudents);

module.exports = studentRouter;
