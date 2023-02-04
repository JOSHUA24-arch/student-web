const express = require("express");
const mongoose = require("express");
const { check, body } = require("express-validator/check");
const isAdmin = require("../../MIDDLEWARE/isAdmin");
const authLogic = require("../../CONTROLLERS/Authorization");

const adminRoutes = express.Router();
adminRoutes.post("/login");

adminRoutes.get("/updateStudent/", isAdmin, studentController.updateStudent);
adminRoutes.delete(
  "/deleteStudent/:studentId",
  studentController.deleteStudent
);

adminRoutes.get("/getAllStudent", isAdmin, studentController.getAllStudents);


module.exports = adminRoutes;