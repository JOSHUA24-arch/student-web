const Student = require("../../MODELS/studentDetailsModel");
const express = require("express");
const mongoose = require("mongoose");
const bicrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Lecture = require("../../MODELS/lecturesModel");

exports.studentLogin = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let student;

  try {
    student = await Student.findOne({ email: email });
    if (!student) {
      let error = new Error("no student found");
      error.statusCode = 404;
      throw error;
    }

    let status = await bicrypt.compare(password, student.password);
    if (!status) {
      let error = new Error("incorrect password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: student.email,
        userId: student._id.toString(),
      },
      "marengajuliusmtumbadisanakwakweli",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: token,
    });
  } catch (error) {
    console.log(error);
    throw new error("failed to login");
  }
};

exports.lectureLogin = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  let lecture;

  try {
    lecture = await Lecture.findOne({ email: email });
    if (!lecture) {
      let error = new Error("no lecture found");
      error.statusCode = 404;
      throw error;
    }

    let status = await bicrypt.compare(password, lecture.password);
    if (!status) {
      let error = new Error("incorrect password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: lecture.email,
        userId: lecture._id.toString(),
      },
      "marengajuliusmtumbadisanakwakweli",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: token,
    });
  } catch (error) {
    console.log(error);
    throw new error("failed to login");
  }
};
