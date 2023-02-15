const Student = require("../../MODELS/StudentBased/studentDetailsModel");
const express = require("express");
const mongoose = require("mongoose");
const bicrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Lecture = require("../../MODELS/LectureBased/lecturesModel");

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

    await res.status(200).json({
      token: token,
    });
  } catch (error) {
    console.log(error);
    throw new error("failed to login");
  }
};

exports.adminLevelLogin = async (req, res, next) => {
  const user_name = req.body.userName;
  const password = req.body.password;

  try {
    let user = await User.findOne({ username: user_name });
    if (!user) {
      throw new Error("no such user");
    }

    let status = bicrypt.compare(password, user.password);

    if (!status) {
      throw new Error("inncorrect password");
    }

    const token = jwt.sign(
      {
        username: user.userName,
        userId: user._id,
        status: user.status,
      },
      "",
      { expiresIn: "24h" }
    );

    await res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);

    throw new Error("failed to login as admin");
  }
};
